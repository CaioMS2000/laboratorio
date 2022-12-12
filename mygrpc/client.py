from os import system
system('clear')

from concurrent import futures
import time
from random import randint
import grpc
from grpc import _server
import sum_pb2
import sum_pb2_grpc

PORT = 50051
HOST = "localhost"
HOST = "192.168.10.6"
min = 0
max = 100

def run():
    with grpc.insecure_channel(f"{HOST}:{PORT}") as channel:
        stub = sum_pb2_grpc.SumNumbersStub(channel)
        a = randint(min, max)
        b = randint(min, max)

        add_request = sum_pb2.AddRequest(a= a, b= b)
        add_reply = stub.Add(add_request)
        print(f"{a} + {b} = {add_reply}")

if __name__ == "__main__":
    run()
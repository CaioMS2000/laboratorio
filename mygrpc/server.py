import platform
from os import system

OS = platform.system()

if OS.lower() in ["linux", "darwin"]:
    system('clear')
else:
    system('cls')

from concurrent import futures
import time
import grpc
from grpc import _server
import sum_pb2
import sum_pb2_grpc

PORT = 50051
HOST = "0.0.0.0"

class Servicer(sum_pb2_grpc.SumNumbersServicer):
    def Add(self, request, context):
        print(request)

        add_reply = sum_pb2.AddReply()
        add_reply.r = request.a + request.b
        
        # return super().Add(request, context)
        return add_reply

def serve():
    server:_server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    sum_pb2_grpc.add_SumNumbersServicer_to_server(Servicer(), server)
    # serve._add_insecure_port(f"localhost:{PORT}")
    server.add_insecure_port(f"{HOST}:{PORT}")
    server.start()
    print(f"Listenning on port {PORT}")
    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == "__main__":
    serve()
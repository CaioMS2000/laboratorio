import random
from os import system
system('clear')

mylist = ["moco", "kabanas", "cao veio", "tatu bola", "piquiras"]
obj = {
    "moco":0, "kabanas":0, "cao veio":0, "tatu bola":0, "piquiras":0
}

for i in range(0, 100):
    choice = (random.choices(mylist, weights = [1, 1, 1, 1, 1], k=1))
    obj[choice[0]] = obj[choice[0]] + 1

print(obj)

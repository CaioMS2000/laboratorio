from random import *

# for i in range(10):
#     print(randint(0, 10))

p1 = [1, 2]
p2 = [2, 3]
print(p1)
p1 = p2.copy()
print(p1)
p2[1] = 5
print(p1)
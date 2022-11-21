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

class Specimen():
    # PUBLIC
    def __init__(self, value, weight, generation, id):
        self.value = value
        self.weight = weight
        self.generation = generation
        self.id = id
    
    def __str__(self):
        return f'value:  {self.value}\nweight: {self.weight}\nfrom generation:    {self.generation}\nID: {self.id}'
    
    def copy(self):
        return Specimen(self.value, self.weight, self.generation, self.id)

a = Specimen([], 3, 1, 1)
b = a.copy()
print(a)
print()
print(b)
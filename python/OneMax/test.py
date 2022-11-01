from random import randint

def switch_bit(vet, pos):
    v = []

    for i in range(0, len(vet)):
        v.append(vet[i])

    v[pos] = 0 if v[pos] == 1 else 1

    return v

answer = []

for i in range(4):
    answer.append(randint(0, 1))

print(answer)
print(switch_bit(answer, 1))
print(answer)
answer.clear()
print(answer)

class Neighbor:
    def __init__(self, value, weight, bit):
        self.value = value
        self.weight = weight
        self.bit = bit
    
    def __str__(self):
        return f'value:  {self.value}\nweight: {self.weight}\nbit:    {self.bit}\n'
from random import randint
import os

os.system('clear')

class Neighbor:
    def __init__(self, value, weight, bit):
        self.value = value
        self.weight = weight
        self.bit = bit
    
    def __str__(self):
        return f'value:  {self.value}\nweight: {self.weight}\nbit:    {self.bit}\n'

def count_one(vet):
    count = 0

    for e in vet:
        if e == 1:
            count = count + 1
    
    return count

def switch_bit(vet, pos):
    v = []

    for i in range(0, len(vet)):
        v.append(vet[i])

    v[pos] = 0 if v[pos] == 1 else 1

    return v

def get_bether_neighbor_index(neighbors):
    index = 0

    for i in range(1, len(neighbors)):
        if neighbors[i].weight > neighbors[index].weight:
            index = i
    
    return index

answer = []

NUMBER_OF_BITS = 4
PROHIBITED = []
for i in range(NUMBER_OF_BITS):
        PROHIBITED.append(1)

answer = PROHIBITED
while (answer == PROHIBITED):
    answer = []
    
    for i in range(NUMBER_OF_BITS):
        answer.append(randint(0, 1))

print(f'Início {answer}\n')

answer_weight = count_one(answer)
i = best = 0
BTMAX = 1
T = None
neighbors = []

while(i - best <= BTMAX):
    i = i + 1

    print(f'Iteração {i}')
    print(f'Melhor atualmente {answer} - {answer_weight}')

    for j in range(0, NUMBER_OF_BITS):
        aux = switch_bit(answer, j)
        neighbors.append(Neighbor(aux, count_one(aux), j))

    print(f'Seus vizinhos\n')
    for j in range(0, NUMBER_OF_BITS):
        print(neighbors[j])

    index = get_bether_neighbor_index(neighbors)

    if neighbors[index].bit != T and neighbors[index].weight > answer_weight:
        answer = neighbors[index].value
        answer_weight = neighbors[index].weight
        T = neighbors[index].bit
        best = i
    
    neighbors.clear()
    # neighbors = []


print(f'\n\nIterações: {i}\nResposta:\nna iteração {best} -> {answer}')
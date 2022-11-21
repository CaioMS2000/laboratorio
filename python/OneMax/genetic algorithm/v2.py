from random import *
from os import system
system('clear')

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
    
    # PRIVATE

gen = tr = 0
genes = 10
population_size = 3
torneio_size = 20
generations_size = 100
mutation_rate = 0.4
crossover_rate = 0.7
population = []

def print_population():
    for i in range(population_size):
        print(f'{population[i]}\n')

def count_one(vet):
    s = 0

    for i in range(genes):
        s += vet[i]
    
    return s

def mutate(spc):
    gene = randint(0, genes - 1)

    spc.value[gene] = 0 if spc.value[gene] == 1 else 1

def crossover(p1, p2):
    limit = randint(0, genes - 1)
    # print(f'limit: {limit}')
    child = []

    for i in range(genes):
        el = population[p1].value[i] if i <= limit else population[p2].value[i]
        # print(f"escolheu: {el}")
        child.append(el)
    
    child = Specimen(child.copy(), count_one(child), gen, -1)
    
    return child

def best_specimen():
    best = 0
    value = count_one(population[best].value)

    for i in range(1, population_size):
        aux = count_one(population[i].value)

        if aux > value:
            best = i
            value = aux
    
    return best

def get_specimen_id(spc):

    for i in range(population_size):
        if population[i].value == spc.value:
            return i
    
    return None

# START
print("@")
for i in range(population_size):
    aux = []

    for j in range(genes):
        aux.append(randint(0, 1))
    
    print(f'{aux} com id {i}')
    population.append(Specimen(aux.copy(), count_one(aux), 0, i))
    aux.clear()

#"""
for gen in range(generations_size):
    for tr in range(torneio_size):
        print("#")
        print_population()
        print("=====================================")

        prob = random()
        print(f'probabilidade de cruzar: {prob:.3f}/{crossover_rate}')

        if prob >= crossover_rate:
            p1 = p2 = randint(0, population_size -1)
            
            while p1 == p2:
                p2 = randint(0, population_size -1)
            
            print(f'{p1}-{population[p1]}\n\ne\n\n{p2}-{population[p2]}\nirão cruzar\n')
            child = crossover(p1, p2)
            print(f'filho gerado:\n{child}\n')
            prob = random()
            print(f'probabilidade de mutar: {prob:.3f}/{mutation_rate}')

            if prob >= mutation_rate:
                mutate(child)
                print(f'filho mutado:\n{child}')
            
            value_p1 = count_one(population[p1].value)
            value_child = count_one(child.value)

            if value_child > value_p1:
                print('o filho assumirá o lugar do pai')
                child.id = population[p1].id
                print(f'filho apatado:\n{child}\n')
                population[p1] = child.copy()
        print("\n")
    
    best = best_specimen()
    best_value = count_one(population[best].value)

    if best_value == genes:
        break
    print("\n")

print("\n@")
print(population[best])
#"""
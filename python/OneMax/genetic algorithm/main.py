from random import *
from os import system
system('clear')

genes = 10
population_size = 50
torneio_size = 20
generations_size = 100
mutation_rate = 0.4
crossover_rate = 0.7
population = []

def print_population():
    for i in range(population_size):
        for j in range(genes):
            print(f'{population[i][j]}', end=" ")
        print("")

def count_one(vet):
    s = 0

    for i in range(genes):
        s += vet[i]
    
    return s

def mutate(vet):
    gene = randint(0, genes - 1)

    vet[gene] = 0 if vet[gene] == 1 else 1

def crossover(p1, p2):
    limit = randint(0, genes - 1)
    # print(f'limit: {limit}')
    child = []

    for i in range(genes):
        el = population[p1][i] if i <= limit else population[p2][i]
        # print(f"escolheu: {el}")
        child.append(el)
    
    return child

def best_specimen():
    best = 0
    value = count_one(population[best])

    for i in range(1, population_size):
        aux = count_one(population[i])

        if aux > value:
            best = i
            value = aux
    
    return best

# START
print("#")
for i in range(population_size):
    aux = []

    for j in range(genes):
        aux.append(randint(0, 1))
    
    population.append(aux.copy())
    aux.clear()


for i in range(generations_size):
    for j in range(torneio_size):
        print_population()
        # print("#\n")

        prob = random()
        print(f'probabilidade de cruzar: {prob:.3f}/{crossover_rate}')

        if prob >= crossover_rate:
            p1 = p2 = randint(0, population_size -1)
            
            while p1 == p2:
                p2 = randint(0, population_size -1)
            
            print(f'{p1}-{population[p1]}\ne\n{p2}-{population[p2]}\nirão cruzar')
            child = crossover(p1, p2)
            print(f'filho gerado: {child}')
            prob = random()
            print(f'probabilidade de mutar: {prob:.3f}/{mutation_rate}')

            if prob >= mutation_rate:
                mutate(child)
                print(f'filho mutado: {child}')
            
            value_p1 = count_one(population[p1])
            value_child = count_one(child)

            if value_child > value_p1:
                population[p1] = child.copy()
        print("\n")
    
    best = best_specimen()
    best_value = count_one(population[best])

    if best_value == genes:
        break
    print("\n")

print("\n")
print(population[best])
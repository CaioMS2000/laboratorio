from os import system
system('clear')
# os pontos centrais são colocados de forma aleatória
# determinar quem faz parte de qual grupo
    # distancia = |x2 - x1| + |y2 - y1|
# reposicionar os centros no ponto médio entre todos os pontos do grupo
# determinar quem faz parte de qual grupo(de novo)
# reposicionar os centros no ponto médio entre todos os pontos do grupo(de novo)
# quando para isso ? quando depois de 2 tentaivas de mudança, nenhum ponto mudar de grupo

from meta import Point
from random import random, randint
import matplotlib.pyplot as plt
import numpy as np

id_ = 0

def save(i: int = 0):
    plt.savefig(f'plot{i}.png')

def groups_are_different(g1: dict, g2: dict)-> bool:
    keys1 = list(g1.keys())
    keys2 = list(g2.keys())

    for i in range(len(keys1)):
        if g1[keys1[i]] != g2[keys2[i]]:
            return True

    return False

def two_decimals(n: int or float)-> float:
    n = n * 100
    n = int(n)
    # n = float(n) / 100
    n = n / 100

    return n

def generate_coordinates():
    x_ = random()*100
    y_ = random()*100
    
    if randint(0, 1) == 1:#chance de ser inteiro
        y_ = int(y_)
    if randint(0, 1) == 1:#chance de ser inteiro
        x_ = int(x_)
    
    y_ = two_decimals(y_)
    x_ = two_decimals(x_)

    return (x_, y_)

k = 3 # numero de clusters
n_points = 50
n = 4
ID = 0

aux = 0
x = list()
y = list()
clusters = list()
points = list()
groups = {}
groups1 = {}
clu = ([], [])

for i in range(k):# criar os grupos
    groups[i] = list()
    groups1[i] = list()

for i in range(n_points):# criar os pontos
    aux = aux + 1
    aux = aux % n

    x_, y_ = generate_coordinates()

    x.append(float(x_))
    y.append(float(y_))
    # points.append(Point(float(x_), float(y_)))

fig, ax = plt.subplots()
# ax.scatter(x, y, c= ([1]*int(len(x)/2))+([2]*int(len(x)/2)))
for i in clusters:
    clu[0].append(i[0])
    clu[1].append(i[1])
plt.scatter(clu[0], clu[1], c= 'red', s= 100, alpha= 0.9)
ax.scatter(x, y)
# plt.show()
save(ID)
ID += 1

for i in range(k):# criar os clusters
    x_, y_ = generate_coordinates()

    clusters.append((float(x_), float(y_)))

tries = 2
t = 0
diff = True

while diff or t < tries:
    keys = list(groups.keys())
    for i in range(len(keys)):
        groups1[keys[i]] = groups[keys[i]].copy()
        groups[keys[i]].clear()

    # distancia = |x2 - x1| + |y2 - y1|
    for i in range(n_points):# determinar os grupos
        aux = []

        for j in range(k):
            d = abs(x[i] - clusters[j][0]) + abs(y[i] - clusters[j][1])
            
            # peso, ponto, cluster
            aux.append((d, i, j))
        
        aux.sort()
        aux = aux[0]
        # print(groups)
        # print(aux)
        groups[aux[2]].append(aux[1])
    

    colors = [-1] * n_points
    # print(groups)
    for i in groups:
        # print(i, end=" ")
        # print(groups[i])

        for j in groups[i]:
            colors[j] = i + 1

    # print(f"\n{colors}")
    fig, ax = plt.subplots()
    clu[0].clear()
    clu[1].clear()
    for i in clusters:
        clu[0].append(i[0])
        clu[1].append(i[1])
    plt.scatter(clu[0], clu[1], c= 'red', s= 100, alpha= 0.9)
    ax.scatter(x, y, c= colors)
    # plt.show()
    save(ID)
    ID += 1

    clusters.clear()
    for j in groups:
        s1 = 0
        s2 = 0
        div = 1

        for i in groups[j]:
            s1 += x[i]
            s2 += y[i]
            div += 1
        
        clusters.append((s1 / div, s2 / div))
            


    diff = groups_are_different(groups, groups1)
    keys = list(groups1.keys())
    
    for i in range(len(keys)):
        groups1[keys[i]].clear()
    
    if not diff:
        t = t + 1

colors = [-1] * n_points
# print(groups)
for i in groups:
    # print(i, end=" ")
    # print(groups[i])

    for j in groups[i]:
        colors[j] = i + 1

# print(f"\n{colors}")
fig, ax = plt.subplots()
clu[0].clear()
clu[1].clear()
for i in clusters:
    clu[0].append(i[0])
    clu[1].append(i[1])
plt.scatter(clu[0], clu[1], c= 'red', s= 100, alpha= 0.9)
ax.scatter(x, y, c= colors)
# plt.show()
save(ID)
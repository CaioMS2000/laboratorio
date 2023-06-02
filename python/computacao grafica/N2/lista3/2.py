import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Define as coordenadas dos vértices do cubo
vertices = np.array([[0, 0, 0, 0, 1, 1, 1, 1],
                     [0, 0, 1, 1, 0, 0, 1, 1],
                     [0, 1, 1, 0, 0, 1, 1, 0]])

# Define as seis faces do cubo
faces = [(0, 1, 2, 3),  # face frontal
         (0, 1, 5, 4),  # face lateral esquerda
         (1, 2, 6, 5),  # face superior
         (2, 3, 7, 6),  # face lateral direita
         (0, 3, 7, 4),  # face inferior
         (4, 5, 6, 7)]  # face traseira

# Cria uma figura 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Desenha as arestas do cubo com cores diferentes
colors = ['red', 'yellow', 'blue', 'green', 'cyan', 'magenta', 'orange', 'white', 'black',  # Base superior
        'orange', 'lime', 'indigo', 'pink',  # Arestas verticais
        ]
for i in range(4):
    ax.plot(vertices[0, [i, (i+1)%4]], vertices[1, [i, (i+1)%4]], vertices[2, [i, (i+1)%4]], color=colors[i])
    ax.plot(vertices[0, [i+4, ((i+1)%4)+4]], vertices[1, [i+4, ((i+1)%4)+4]], vertices[2, [i+4, ((i+1)%4)+4]], color=colors[i])
    ax.plot(vertices[0, [i, i+4]], vertices[1, [i, i+4]], vertices[2, [i, i+4]], color=colors[i])
ax.plot(vertices[0, [1, 5]], vertices[1, [1, 5]], vertices[2, [1, 5]], color=colors[4])  # adiciona a aresta faltante

# Configura o eixo 3D
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.set_zlim(0, 1)
ax.set_xlabel('R')
ax.set_ylabel('G')
ax.set_zlabel('B')

# Exibe a figura
plt.show()

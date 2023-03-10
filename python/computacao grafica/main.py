import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Define as coordenadas do cubo quadridimensional
vertices = np.array([[-1, -1, -1, -1],
                     [-1, -1, -1,  1],
                     [-1, -1,  1, -1],
                     [-1, -1,  1,  1],
                     [-1,  1, -1, -1],
                     [-1,  1, -1,  1],
                     [-1,  1,  1, -1],
                     [-1,  1,  1,  1],
                     [ 1, -1, -1, -1],
                     [ 1, -1, -1,  1],
                     [ 1, -1,  1, -1],
                     [ 1, -1,  1,  1],
                     [ 1,  1, -1, -1],
                     [ 1,  1, -1,  1],
                     [ 1,  1,  1, -1],
                     [ 1,  1,  1,  1]])

# Define as arestas do cubo quadridimensional
arestas = [(0, 1), (0, 2), (0, 4), (1, 3), (1, 5), (2, 3), (2, 6), (3, 7), (4, 5), (4, 6), (5, 7), (6, 7)]

# Desenha as arestas
for aresta in arestas:
    x = [vertices[aresta[0], 0], vertices[aresta[1], 0]]
    y = [vertices[aresta[0], 1], vertices[aresta[1], 1]]
    z = [vertices[aresta[0], 2], vertices[aresta[1], 2]]
    w = [vertices[aresta[0], 3], vertices[aresta[1], 3]]
    ax.plot(x, y, z, w)

plt.show()

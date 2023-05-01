import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Define as coordenadas dos vértices do cubo
vertices = np.array([[0, 0, 0, 0, 1, 1, 1, 1],
                     [0, 0, 1, 1, 0, 0, 1, 1],
                     [0, 1, 1, 0, 0, 1, 1, 0]])

# Define os valores de cisalhamento em relação aos eixos X, Y e Z
sxy = 0.5
sxz = 0.2
syz = 0.3

# Define as matrizes de transformação para cada eixo
Tx = np.array([[1, sxy, sxz],
               [0, 1, syz],
               [0, 0, 1]])
Ty = np.array([[1, sxy, sxz],
               [syz, 1, syz],
               [0, 0, 1]])
Tz = np.array([[1, sxy, sxz],
               [0, 1, syz],
               [sxz, syz, 1]])

# Aplica as transformações de cisalhamento em cada coordenada de vértice
vertices = np.dot(Tx, vertices)
vertices = np.dot(Ty, vertices)
vertices = np.dot(Tz, vertices)

# Cria uma figura 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Desenha as arestas do cubo
for i in range(4):
    ax.plot(vertices[0, [i, (i+1)%4]], vertices[1, [i, (i+1)%4]], vertices[2, [i, (i+1)%4]])
    ax.plot(vertices[0, [i+4, ((i+1)%4)+4]], vertices[1, [i+4, ((i+1)%4)+4]], vertices[2, [i+4, ((i+1)%4)+4]])
    ax.plot(vertices[0, [i, i+4]], vertices[1, [i, i+4]], vertices[2, [i, i+4]])
ax.plot(vertices[0, [1, 5]], vertices[1, [1, 5]], vertices[2, [1, 5]])  # adiciona a aresta faltante


# Configura o eixo 3D
ax.set_xlim(0, 4)
ax.set_ylim(0, 4)
ax.set_zlim(0, 4)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

# Exibe a figura
plt.show()

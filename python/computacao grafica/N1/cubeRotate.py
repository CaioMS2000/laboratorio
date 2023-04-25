import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
import numpy as np
from pyquaternion import Quaternion

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Define as coordenadas do cubo
vertices = np.array([[-1, -1, -1],
                     [ 1, -1, -1],
                     [ 1,  1, -1],
                     [-1,  1, -1],
                     [-1, -1,  1],
                     [ 1, -1,  1],
                     [ 1,  1,  1],
                     [-1,  1,  1]])

# Define as arestas do cubo
arestas = [(0, 1), (1, 2), (2, 3), (3, 0),
           (4, 5), (5, 6), (6, 7), (7, 4),
           (0, 4), (1, 5), (2, 6), (3, 7)]

# Define a diagonal principal do cubo
diag = [(0, 6)]

# Define a função de animação
def animate(i):
    ax.clear()
    ax.set_xlim([-2, 2])
    ax.set_ylim([-2, 2])
    ax.set_zlim([-2, 2])
    q = Quaternion(axis=[1, 1, 1], angle=i*np.pi/180)
    vertices_rot = np.zeros((8, 3))
    for j in range(8):
        vertices_rot[j, :] = q.rotate(vertices[j, :])
    for aresta in arestas:
        x = [vertices_rot[aresta[0], 0], vertices_rot[aresta[1], 0]]
        y = [vertices_rot[aresta[0], 1], vertices_rot[aresta[1], 1]]
        z = [vertices_rot[aresta[0], 2], vertices_rot[aresta[1], 2]]
        ax.plot(x, y, z, color='b')
    for d in diag:
        x = [vertices_rot[d[0], 0], vertices_rot[d[1], 0]]
        y = [vertices_rot[d[0], 1], vertices_rot[d[1], 1]]
        z = [vertices_rot[d[0], 2], vertices_rot[d[1], 2]]
        ax.plot(x, y, z, color='r')

# Cria a animação
ani = FuncAnimation(fig, animate, frames=360, interval=10)

plt.show()

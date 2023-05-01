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

# Desenha as faces do cubo
for face in faces:
    x = vertices[0, face]
    y = vertices[1, face]
    z = vertices[2, face]
    ax.plot(x, y, z)

# Configura o eixo 3D
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.set_zlim(0, 1)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

# Exibe a figura
plt.show()

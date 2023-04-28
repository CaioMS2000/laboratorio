import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# vértices do triângulo
v1 = np.array([0, 0, 0], ndmin=2)
v2 = np.array([1, 0, 0], ndmin=2)
v3 = np.array([0, 1, 1], ndmin=2)

# criando os arrays de coordenadas
X = np.array([v1[0], v2[0], v3[0]])
Y = np.array([v1[1], v2[1], v3[1]])
Z = np.array([v1[2], v2[2], v3[2]])

# criando a figura 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# plotando o triângulo
ax.plot_trisurf(X.flatten(), Y.flatten(), Z.flatten())

# configurando os limites dos eixos
ax.set_xlim([0, 1])
ax.set_ylim([0, 1])
ax.set_zlim([0, 1])

# mostrando o gráfico
plt.show()

import numpy as np
import matplotlib.pyplot as plt

# pontos de controle
P0 = np.array([0, 0])
P1 = np.array([1, 1])
T0 = np.array([2, 3])
T1 = np.array([3, 2])

# matriz de Hermite
H = np.array([[2, -2, 1, 1],
              [-3, 3, -2, -1],
              [0, 0, 1, 0],
              [1, 0, 0, 0]])

# vetor de pontos
t = np.linspace(0, 1, 100)
T = np.vstack((t**3, t**2, t, np.ones(t.shape)))

# matriz de pontos
G = np.column_stack((P0, P1, T0, T1))

# curva de Hermite
C = np.dot(G, np.dot(H, T))

# plot da curva
plt.plot(C[0], C[1], color='blue')

# plot dos pontos de controle
plt.scatter(G[0], G[1], color='red')

plt.show()

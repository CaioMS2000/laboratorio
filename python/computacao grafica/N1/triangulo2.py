from os import system
system('clear')
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import numpy as np

fig, ax = plt.subplots()
ax.set_aspect('equal')

# Definindo as coordenadas do triângulo
x = [0, 1, 0.5]
y = [0, 0, 0.5 * np.sqrt(3)]

# Plotando o triângulo
tri, = ax.plot(x, y)

# Matriz de translação
T = np.array([
    [1, 0, 0],
    [0, 1, 0],
    [0.01, 0.01, 1]
])

# Função que atualiza a posição do triângulo
def update(num):
    global x, y
    new_tri = np.transpose([x, y, np.ones(3)]) @ np.linalg.matrix_power(T, num)
    tri.set_data(new_tri[:, 0], new_tri[:, 1])
    return tri

# Criando a animação
ani = FuncAnimation(fig, update, frames=100, interval=50, blit=True)
plt.draw()
plt.pause(0.001)

plt.show()

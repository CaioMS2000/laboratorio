from os import system
system('clear')

import matplotlib
# matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
import numpy as np

minor_limit = 0
major_limit = 10

x = [3, 6, 7]
y = [2, 8, 3]

fig, ax = plt.subplots()

# Plotando o triângulo com as arestas de cores diferentes
ax.plot([x[0], x[1]], [y[0], y[1]], color='red', linewidth=1)
ax.plot([x[1], x[2]], [y[1], y[2]], color='green', linewidth=2)
ax.plot([x[2], x[0]], [y[2], y[0]], color='blue', linewidth=3)


file_name = str(__file__)
file_name = file_name.split('/')[0]
file_name = file_name.replace('.py', '')

plt.savefig(f'{file_name}.png')
plt.show()
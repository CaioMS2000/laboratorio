import matplotlib
import matplotlib.pyplot as plt
import numpy as np
matplotlib.use('TkAgg')

dots = 2
colors = np.random.uniform(15, 80, dots)

fig, ax = plt.subplots()

x = [3, 6]
y = [2, 8]
ax.scatter(x[0], y[0], c=colors[0], vmin=0, vmax=100, marker="o")
ax.scatter(x[1], y[1], c=colors[1], vmin=0, vmax=100, marker="+")

ax.set(xlim=(-10, 10),
       ylim=(-10, 10))

file_name = str(__file__)
aux = file_name.split('/')
file_name = aux[len(aux)-1]
file_name = file_name.replace('.py', '')

fig.savefig(f'{file_name}.png')
plt.show()
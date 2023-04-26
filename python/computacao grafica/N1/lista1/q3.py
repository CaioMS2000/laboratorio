import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
import numpy as np

# make data
x = np.linspace(0, 10, 100)
y = 4 + 2 * x
# plot
fig, ax = plt.subplots()

ax.plot(x, y, linewidth=2.0)

ax.set(xlim=(0, 8), xticks=np.arange(1, 8),
       ylim=(0, 8), yticks=np.arange(1, 8))

file_name = str(__file__)
aux = file_name.split('/')
file_name = aux[len(aux)-1]
file_name = file_name.replace('.py', '')

fig.savefig(f'{file_name}.png')
plt.show()
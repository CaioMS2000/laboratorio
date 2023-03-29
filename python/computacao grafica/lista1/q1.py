import matplotlib.pyplot as plt
import numpy as np

colors = np.random.uniform(15, 80, 10)

# plot
fig, ax = plt.subplots()

x1 = [5,]
y1 = [5,]
ax.scatter(x1, y1, c=colors[0], vmin=0, vmax=100, marker="o")

# ax.set(xlim=(-10, 10), xticks=np.arange(-10, 10),
#        ylim=(-10, 10), yticks=np.arange(-10, 10))
ax.set(xlim=(-10, 10),
       ylim=(-10, 10))

file_name = str(__file__)
file_name = file_name.split('/')[0]
file_name = file_name.replace('.py', '')

fig.savefig(f'{file_name}.png')
plt.show()
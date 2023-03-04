import matplotlib.pyplot as plt
import numpy as np

# plt.style.use('_mpl-gallery')

# make the data
np.random.seed(3)
x = 4 + np.random.normal(0, 2, 24)
y = 4 + np.random.normal(0, 2, len(x))
# size and color:
sizes = np.random.uniform(15, 80, len(x))
colors = np.random.uniform(15, 80, len(x))

# plot
fig, ax = plt.subplots()

# ax.scatter(x, y, s=sizes, c=colors, vmin=0, vmax=100)
x = [2, 3]
y = [1, 8]
ax.scatter(x, y, c=colors[0:2], vmin=0, vmax=100)

ax.set(xlim=(0, 10), xticks=np.arange(1, 10),
       ylim=(0, 10), yticks=np.arange(1, 10))

fig.savefig('dot.png')
plt.show()
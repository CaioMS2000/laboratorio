import matplotlib.pyplot as plt
import numpy as np

# plt.style.use('_mpl-gallery')

# Make data
np.random.seed(19680801)


xs = np.linspace(0, 10, 100)
ys = 4 + 2 * xs
zs = 1 + 2 * xs

# Plot
fig, ax = plt.subplots(subplot_kw={"projection": "3d"})
ax.scatter(xs, ys, zs)

ax.set(xticklabels=[],
       yticklabels=[],
       zticklabels=[])

fig.savefig('line3D.png')
plt.show()
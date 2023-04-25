import matplotlib.pyplot as plt
import numpy as np

# plt.style.use('_mpl-gallery')

# Make data
np.random.seed(19680801)

xs = 4
ys = 4
zs = 4

# Plot
fig, ax = plt.subplots(subplot_kw={"projection": "3d"})
ax.scatter(xs, ys, zs)

ax.set(xticklabels=[],
       yticklabels=[],
       zticklabels=[])

fig.savefig('dot3D.png')
plt.show()
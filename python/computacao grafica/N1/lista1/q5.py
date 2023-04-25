import numpy as np
import matplotlib.pyplot as plt

x = [3, 6, 7]
y = [2, 8, 3]

fig, ax = plt.subplots()

ax.plot([x[0], x[1]], [y[0], y[1]], color='purple', linewidth=2)
ax.plot([x[1], x[2]], [y[1], y[2]], color='purple', linewidth=2)
ax.plot([x[2], x[0]], [y[2], y[0]], color='purple', linewidth=2)

ax.plot([x[2], x[1]], [y[2], y[1]], color='purple', linewidth=2)

dx = 2
dy = 1
mat_transl = np.array([[1, 0, dx], [0, 1, dy], [0, 0, 1]])
mat_transl = np.array([[1, 0, 3], [0, 1, 5], [0, 0, 1]])

homog_coords = np.vstack((x, y, np.ones(3)))
transl_coords = mat_transl @ homog_coords

x_transl = transl_coords[0, :]
y_transl = transl_coords[1, :]

ax.plot([x_transl[0], x_transl[1]], [y_transl[0], y_transl[1]], color='green', linewidth=2)
ax.plot([x_transl[1], x_transl[2]], [y_transl[1], y_transl[2]], color='green', linewidth=2)
ax.plot([x_transl[2], x_transl[0]], [y_transl[2], y_transl[0]], color='green', linewidth=2)

ax.plot([x_transl[2], x_transl[1]], [y_transl[2], y_transl[1]], color='green', linewidth=2)

ax.set_xlim([-1, 12])
ax.set_ylim([-1, 15])

file_name = str(__file__)
file_name = file_name.split('/')[0]
file_name = file_name.replace('.py', '')
plt.savefig(f'{file_name}.png')

plt.show()
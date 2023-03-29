import numpy as np
import matplotlib.pyplot as plt

file_name = str(__file__)
file_name = file_name.split('/')[0]
file_name = file_name.replace('.py', '')

x = [3, 6, 7]
y = [2, 8, 3]

fig, ax = plt.subplots()

ax.plot([x[0], x[1]], [y[0], y[1]], color='red', linewidth=2)
ax.plot([x[1], x[2]], [y[1], y[2]], color='green', linewidth=3)
ax.plot([x[2], x[0]], [y[2], y[0]], color='blue', linewidth=1)

ax.plot([x[2], x[1]], [y[2], y[1]], color='purple', linewidth=2)

plt.savefig(f'{file_name}(1).png')
plt.show(block=False)
plt.pause(2)

dx = 2  # deslocamento horizontal
dy = 1  # deslocamento vertical
mat_transl = np.array([[1, 0, dx], [0, 1, dy], [0, 0, 1]])
mat_transl = np.array([[1, 0, 3], [0, 1, 5], [0, 0, 1]])

homog_coords = np.vstack((x, y, np.ones(3)))
transl_coords = mat_transl @ homog_coords

x_transl = transl_coords[0, :]
y_transl = transl_coords[1, :]

if len(ax.lines) >= 4:
    for i in range(4):
        ax.lines[-1].remove()

ax.plot([x_transl[0], x_transl[1]], [y_transl[0], y_transl[1]], color='magenta', linewidth=2)
ax.plot([x_transl[1], x_transl[2]], [y_transl[1], y_transl[2]], color='cyan', linewidth=3)
ax.plot([x_transl[2], x_transl[0]], [y_transl[2], y_transl[0]], color='yellow', linewidth=1)

ax.plot([x_transl[2], x_transl[1]], [y_transl[2], y_transl[1]], color='black', linewidth=2)

ax.set_xlim([5, 12])
ax.set_ylim([5, 15])

ax.legend(['Original 1', 'Original 2', 'Original 3', 'Original 4', 'Transladado 1', 'Transladado 2', 'Transladado 3', 'Transladado 4'])
ax.set_title('Transformação')

plt.savefig(f'{file_name}(2).png')
plt.show()

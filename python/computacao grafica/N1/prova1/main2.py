import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
from matplotlib.colors import colorConverter

# coordenadas dos pontos
x = np.array([1, 2, 3])
y = np.array([4, 4, 6])
z = np.array([7, 9, 9])

# símbolos para cada ponto
symbols = ['o', '+', '*']

# cores para cada ponto
colors = ['r', 'g', 'b']

# cria uma figura com um eixo 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# adiciona os pontos com símbolos e cores diferentes
for i in range(3):
    ax.scatter(x[i], y[i], z[i], marker=symbols[i], color=colors[i])

# cria um objeto de superfície 3D a partir dos pontos
verts = np.column_stack([x, y, z])
triangles = [[0, 1, 2]]
facecolors = [colorConverter.to_rgba('magenta', alpha=0.9)]
poly = ax.plot_trisurf(verts[:, 0], verts[:, 1], triangles, verts[:, 2],
                       facecolors=facecolors, shade=False)

# cria um objeto de preenchimento 3D
ax.fill_between(x, y, z, color=colorConverter.to_rgba('magenta', alpha=0.3))

# define o ponto de rotação
rot_point = np.array([x[0], y[0], z[0]])

# define o ângulo inicial de rotação
angle = 0

# define a função de animação
def animate(i):
    global angle
    angle += 1
    # aplica a transformação de rotação ao objeto de superfície
    rot_matrix = np.array([[1, 0, 0], [0, np.cos(angle*np.pi/180), -np.sin(angle*np.pi/180)],
                           [0, np.sin(angle*np.pi/180), np.cos(angle*np.pi/180)]])
    rotated_verts = (verts - rot_point).dot(rot_matrix) + rot_point
    poly.set_verts(rotated_verts)
    # aplica a transformação de rotação ao objeto de preenchimento
    rotated_z = (z - z[0])*np.cos(angle*np.pi/180) - (y - y[0])*np.sin(angle*np.pi/180) + z[0]
    ax.collections[0].remove()
    ax.fill_between(x, y, rotated_z, color=colorConverter.to_rgba('magenta', alpha=0.3))
    return poly,

# cria a animação
ani = FuncAnimation(fig, animate, frames=np.arange(0, 360, 1),
                    interval=25, blit=True, repeat=True)

# mostra o gráfico
plt.show()

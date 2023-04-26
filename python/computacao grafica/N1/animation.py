import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from mpl_toolkits.mplot3d.art3d import Poly3DCollection, PathPatch3D
import numpy as np

# coordenadas dos pontos
x = [1, 2, 3]
y = [4, 4, 6]
z = [7, 9, 9]

# adiciona o primeiro ponto ao final para fechar o polígono
x.append(x[0])
y.append(y[0])
z.append(z[0])

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

# cria uma lista de vértices para formar o polígono
verts = [(x[i], y[i], z[i]) for i in range(3)]

# cria uma instância de Poly3DCollection a partir dos vértices
poly = Poly3DCollection([verts], alpha=0.9, facecolor='magenta')

# adiciona a instância de Poly3DCollection ao eixo 3D
ax.add_collection3d(poly)

# cria um objeto PathPatch3D para a figura
patch = PathPatch3D(poly.get_paths()[0], alpha=0.9, facecolor='magenta')

# adiciona o objeto ao eixo 3D
ax.add_patch(patch)

# define a posição inicial da câmera
ax.view_init(elev=30, azim=30)

# obtém os limites da figura
xlim = ax.get_xlim3d()
ylim = ax.get_ylim3d()
zlim = ax.get_zlim3d()

# define o ponto central da figura
xc = (xlim[0] + xlim[1]) / 2
yc = (ylim[0] + ylim[1]) / 2
zc = (zlim[0] + zlim[1]) / 2

# define a distância da figura até a câmera
distance = np.sqrt((xlim[1]-xlim[0])**2 + (ylim[1]-ylim[0])**2 + (zlim[1]-zlim[0])**2)

# faz a rotação da figura
for angle in range(0, 360, 5):
    # rotaciona o objeto PathPatch3D
    patch._rotation = (0, 0, angle)

    # atualiza a figura
    fig.canvas.draw()

    # adiciona um pequeno delay e atualiza a figura novamente
    plt.pause(0.001)

# mostra a figura final
plt.show()

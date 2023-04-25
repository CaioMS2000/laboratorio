import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from mpl_toolkits.mplot3d.art3d import Poly3DCollection

# coordenadas dos pontos
x = [1, 2, 3]
y = [4, 4, 6]
z = [7, 9, 9]
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

# mostra o gráfico
plt.show()

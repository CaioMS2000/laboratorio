from matplotlib import pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.animation import FuncAnimation
import numpy as np

x = [0]
y = [0]
z = [0]

figure = plt.figure()
ax = figure.add_subplot(111, projection='3d')

ax.set_xlim(0, 200)
ax.set_ylim(0, 12)
ax.set_zlim(0, 1)

scat = ax.scatter(0, 0, 0, c=[0], cmap='viridis')

def animation_function(i):
    # x.append(i * 15)
    # y.append(i)
    # z.append(0)
    x[0] = i * 15
    y[0] = i
    z[0] = 0
  
    scat._offsets3d = (x, y, z)
    scat.set_array(x)
    
    # atualiza os limites do gráfico
    if max(x) >= ax.get_xlim()[1]:
        ax.set_xlim(ax.get_xlim()[0], max(x) + 10)
    if max(y) >= ax.get_ylim()[1]:
        ax.set_ylim(ax.get_ylim()[0], max(y) + 1)
    if max(z) >= ax.get_zlim()[1]:
        ax.set_zlim(ax.get_zlim()[0], max(z) + 0.1)
    
    return scat,

animation = FuncAnimation(figure,
                          func = animation_function,
                          frames = np.arange(0, 10, 0.1), 
                          interval = 10,
                          repeat=False)

plt.show()

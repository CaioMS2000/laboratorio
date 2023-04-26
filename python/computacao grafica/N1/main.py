from utility import clear_console
clear_console()

from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation
import numpy as np
  
x = []
y = []
  
figure, ax = plt.subplots()
  
ax.set_xlim(0, 100)
ax.set_ylim(0, 12)
  
line,  = ax.plot(0, 0) 
  
def animation_function(i):
    print(f'x: {i*15}')
    print(f'y: {i}\n')
    x.append(i * 15)
    y.append(i)
  
    line.set_xdata(x)
    line.set_ydata(y)
    
    # atualiza os limites do gráfico
    if max(x) >= ax.get_xlim()[1]:
        ax.set_xlim(ax.get_xlim()[0], max(x) + 10)
    if max(y) >= ax.get_ylim()[1]:
        ax.set_ylim(ax.get_ylim()[0], max(y) + 1)
    
    return line,
  
animation = FuncAnimation(figure,
                          func = animation_function,
                          frames = np.arange(0, 10, 0.1), 
                          interval = 10,
                          repeat=False)
plt.show()

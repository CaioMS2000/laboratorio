import matplotlib
# matplotlib.use('Agg')
# matplotlib.use('Qt5Agg')
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
import numpy as np

plt.ion()

file_name = str(__file__)
print(file_name)
aux = file_name.split('/')
file_name = aux[len(aux)-1]
print(file_name)
file_name = file_name.replace('.py', '')
print(file_name)

vertices = np.array([[0, 0], [1, 0], [0.5, 0.866], [0, 0]])

S = np.array([[2, 0], [0, 2]])

plt.plot(vertices[:,0], vertices[:,1], 'b-', label='Original')

plt.xlim(-1.5, 3.5)
plt.ylim(-1.5, 3.5)

plt.legend()

plt.savefig(f'{file_name}(1).png')
plt.show()

plt.pause(2)

plt.clf()

vertices_transformados = vertices @ S

plt.plot(vertices_transformados[:,0], vertices_transformados[:,1], 'r-', label='Transformado')

plt.xlim(-1.5, 3.5)
plt.ylim(-1.5, 3.5)

plt.legend()

plt.savefig(f'{file_name}(2).png')
plt.show()

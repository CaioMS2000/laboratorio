import numpy as np
import matplotlib.pyplot as plt

# Define os pontos de controle da curva
points = np.array([[0, 0], [1, 2], [3, 4], [5, 2]])

# Define o número de pontos ao longo da curva
num_points = 100

# Define os valores de t
t_values = np.linspace(0, 1, num_points)

# Calcula os pontos da curva de Bézier para cada valor de t
curve_points = []
for t in t_values:
    curve_point = points[0]*(1-t)**3 + 3*points[1]*t*(1-t)**2 + 3*points[2]*t**2*(1-t) + points[3]*t**3
    curve_points.append(curve_point)

# Converte a lista de pontos da curva em um array numpy
curve_points = np.array(curve_points)

# Plota a curva
plt.plot(curve_points[:, 0], curve_points[:, 1])
plt.scatter(points[:, 0], points[:, 1], color=['red', 'green', 'blue', 'orange'])
plt.show()

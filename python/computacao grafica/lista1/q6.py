# import matplotlib.pyplot as plt
# import numpy as np

# vertices = np.array([[0, 0], [1, 0], [0.5, 0.866], [0, 0]])

# plt.plot(vertices[:,0], vertices[:,1], 'b-')

# plt.xlim(-0.1, 1.1)
# plt.ylim(-0.1, 1.0)

# plt.show()

import matplotlib.pyplot as plt
import numpy as np

# Definindo as coordenadas dos vértices do triângulo
vertices = np.array([[0, 0], [1, 0], [0.5, 0.866], [0, 0]])

# Definindo a matriz de escala
S = np.array([[2, 0], [0, 2]])

# Aplicando a transformação de escala às coordenadas dos vértices
vertices_transformados = vertices @ S

# Plotando o triângulo original
plt.plot(vertices[:,0], vertices[:,1], 'b-', label='Original')

# Plotando o triângulo transformado
plt.plot(vertices_transformados[:,0], vertices_transformados[:,1], 'r-', label='Transformado')

# Configurando os limites dos eixos
plt.xlim(-1.5, 3.5)
plt.ylim(-1.5, 3.5)

# Adicionando uma legenda
plt.legend()

# Exibindo o gráfico
plt.show()

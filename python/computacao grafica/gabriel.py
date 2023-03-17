import matplotlib.pyplot as plt

# Definir as coordenadas originais dos vértices do triângulo
x = [0, 1, 0.5]
y = [0, 0, 1]

# Transladar o triângulo em 3 unidades na horizontal e -4 na vertical
x_trans = [xi + 3 for xi in x]
y_trans = [yi - 4 for yi in y]

# Traçar o triângulo original e o transladado
plt.plot(x, y, label='Original')
plt.plot(x_trans, y_trans, label='Transladado')

# Definir o título do gráfico e os rótulos dos eixos
plt.title('Translação de um triângulo')
plt.xlabel('X')
plt.ylabel('Y')

# Mostrar a legenda e o gráfico
plt.legend()
plt.show()

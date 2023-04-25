import matplotlib.pyplot as plt

# Definindo os vértices do triângulo
x = [1, 3, 4]
y = [2, 4, 1]

# Criando o gráfico e plotando o triângulo
fig, ax = plt.subplots()
ax.plot(x, y, 'r', linewidth=2)
ax.fill(x, y, 'r', alpha=0.3)

# Definindo os limites dos eixos
ax.set_xlim(0, 5)
ax.set_ylim(0, 5)

# Definindo o título e os rótulos dos eixos
ax.set_title('Triângulo no primeiro quadrante')
ax.set_xlabel('Eixo X')
ax.set_ylabel('Eixo Y')

# Exibindo o gráfico
plt.show()

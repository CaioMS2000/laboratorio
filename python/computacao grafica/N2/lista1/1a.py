import matplotlib.pyplot as plt

# Definindo os vértices do triângulo
x = [1, 3, 4]
y = [2, 4, 1]
x.append(x[0])
y.append(y[0])

# Criando o gráfico e plotando o triângulo
fig, ax = plt.subplots()
ax.plot(x, y, 'r', linewidth=2)
ax.fill(x, y, 'r', alpha=0.3)

# Criando a cópia do triângulo com y invertido
x_mirror = x
y_mirror = [-i for i in y]

# Plotando o espelhamento do triângulo em relação ao eixo x
ax.plot(x_mirror, y_mirror, 'b', linewidth=2)
ax.fill(x_mirror, y_mirror, 'b', alpha=0.3)

# Adicionando o tracejamento dos eixos x e y
ax.axhline(y=0, color='gray', linestyle='--')
ax.axvline(x=0, color='gray', linestyle='--')

# Definindo os limites dos eixos
ax.set_xlim(-1, 5)
ax.set_ylim(-5, 5)

# Definindo o título e os rótulos dos eixos
ax.set_title('Triângulo e seu espelhamento em relação ao eixo x')
ax.set_xlabel('Eixo X')
ax.set_ylabel('Eixo Y')

# Exibindo o gráfico
plt.show()

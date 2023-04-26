from os import system
system('clear')

import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import numpy as np

# from .utils import Matrix

class Matrix:
    def print(mtx):
        for arr in mtx:
            print(arr)
        
        print()

minor_limit = -1
major_limit = 12

# 4, 5 x 7, 5

# 7, 1 x 10, 1

def v1():
    # Define as coordenadas dos vértices do triângulo
    x = [0, 1, 2, 0]
    y = [0, 2, 1, 0]
    x = [4, 7, 5.5]
    y = [5, 5, 8]

    x.append(x[0])
    y.append(y[0])

    # Define o vetor de translação
    t = np.array([3, 3])

    # Aplica a translação nas coordenadas dos vértices
    x_transl = x + t[0]
    y_transl = y + t[1]

    # Plota o triângulo com translação
    plt.plot(x, y, color='red')
    plt.plot(x_transl, y_transl, color='blue')

    # Define os limites do gráfico
    plt.xlim([minor_limit, major_limit])
    plt.ylim([minor_limit, major_limit])

    # Mostra o gráfico
    plt.show()

def v2():
    # Define as coordenadas dos vértices do triângulo
    x = [0, 1, 2, 0]
    y = [0, 2, 1, 0]

    # Define a matriz de translação
    t = np.array([[1, 0, 1], [0, 1, 1], [0, 0, 1]])
    print('t:')
    Matrix.print(t)

    # Define as coordenadas dos vértices como uma matriz
    ones = np.ones(len(x))
    print(f'ones:{ones}\n')
    vertices = np.vstack((x, y, ones))
    print('vertices:')
    Matrix.print(vertices)

    # Aplica a translação utilizando a multiplicação de matrizes
    vertices_transl = np.dot(t, vertices)
    print('vertices_transl:')
    Matrix.print(vertices_transl)

    # Plota o triângulo com translação
    plt.plot(vertices[0, :], vertices[1, :], color='red')
    plt.plot(vertices_transl[0, :], vertices_transl[1, :], color='blue')

    # Define os limites do gráfico
    plt.xlim([minor_limit, major_limit-6])
    plt.ylim([minor_limit, major_limit-6])

    # Mostra o gráfico
    plt.show()

def v3():
    # Definindo os vértices do triângulo
    vertices = np.array([[0, 0], [1, 0], [0.5, 1]])

    # Função para animar a translação do triângulo
    def animate(frame):
        # Translação dos vértices do triângulo
        vertices[:, 1] += 0.01
        # Plotagem do triângulo
        plt.clf()
        plt.plot(vertices[:, 0], vertices[:, 1], '-o')

    # Configurando o gráfico
    fig, ax = plt.subplots()
    ax.set_xlim([minor_limit, major_limit])
    ax.set_ylim([minor_limit, major_limit])

    # Criando a animação
    ani = FuncAnimation(fig, animate, frames=range(100), interval=50)

    # Mostrando o gráfico animado
    plt.show()

def v4():
    vertices = np.array([[0, 0], [0.5, 1], [1, 0]])

    fig = plt.figure(figsize=(12,12))
    ax = fig.add_subplot(111)

    ax.set_xlim(minor_limit, major_limit)
    ax.set_ylim(minor_limit, major_limit)

    tria = plt.Polygon(vertices, fill=False)
    ax.add_patch(tria)

    delta_x, delta_y = 0.1, 0.1

    for i in range(100):
        vertices[:, 0] += delta_x
        vertices[:, 1] += delta_y
        tria.set_xy(vertices)
        plt.pause(0.1)

v4()

"""
escreva um codigo python que plote um trinagulo não preenchido e que faça uma translação animada e que use o metodo das matrizes de translação
"""
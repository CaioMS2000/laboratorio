import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import math
import numpy as np

# Definindo as coordenadas dos pontos A, B e C
A = [1, 0, 1]
B = [9, 1, 1]
C = [5, 7, 1]
D = [5, 3, 9]

# Criando uma figura em 3D
fig = plt.figure()
ax = fig.add_subplot(projection='3d')

# Desenhando os pontos A, B e C com as cores desejadas
ax.scatter(A[0], A[1], A[2], color='r', marker='o', s=50)
ax.scatter(B[0], B[1], B[2], color='g', marker='+', s=50)
ax.scatter(C[0], C[1], C[2], color='b', marker='*', s=50)
ax.scatter(D[0], D[1], D[2], color='y', marker='v', s=50)

# 1 Desenhando os segmentos de reta ligando os pontos A, B e C
ax.plot([A[0], B[0]], [A[1], B[1]], [A[2], B[2]], color='b', lw=0.5)
ax.plot([B[0], C[0]], [B[1], C[1]], [B[2], C[2]], color='r', lw=0.5)
ax.plot([C[0], A[0]], [C[1], A[1]], [C[2], A[2]], color='g', lw=0.5)

ax.plot([A[0], D[0]], [A[1], D[1]], [A[2], D[2]], color='r', lw=0.5)
ax.plot([B[0], D[0]], [B[1], D[1]], [B[2], D[2]], color='b', lw=0.5)
ax.plot([C[0], D[0]], [C[1], D[1]], [C[2], D[2]], color='g', lw=0.5)


# Configurando os limites dos eixos x, y e z
ax.set_ylabel('Y')
ax.set_xlabel('X')
ax.set_xlim3d(-10, 10)
ax.set_ylim3d(-10, 10)
ax.set_zlim3d(-10, 10)
ax.grid(False)

plt.savefig(r'Rotacao\0graus.jpg')

radians = math.radians(0)
cos = math.cos(radians)
sin = math.sin(radians)

Rx = [[1,   0,      0,      0],
      [0,   cos,    -sin,   0],
      [0,   sin,    cos,    0],
      [0,   0,      0,      1]]

Ry = [[cos,     0,  sin,    0],
      [0,       1,  0,      0],
      [-sin,    0,  cos,    0],
      [0,       0,  0,      1]]

Rz = [[cos,     -sin,   0,  0],
      [sin,     cos,    0,  0],
      [0,       0,      1,  0],
      [0,       0,      0,  1]]

A = np.array([[A[0]], [A[1]], [A[2]], [1]])
B = np.array([[B[0]], [B[1]], [B[2]], [1]])
C = np.array([[C[0]], [C[1]], [C[2]], [1]])
D = np.array([[D[0]], [D[1]], [D[2]], [1]])

ponto = A
ponto[3] = [0]
      
for i in range(1, 361):
      
      radians = math.radians(i)
      cos = math.cos(radians)
      sin = math.sin(radians)

      Rx = [[1,   0,      0,      0],
      [0,   cos,    -sin,   0],
      [0,   sin,    cos,    0],
      [0,   0,      0,      1]]

      Ry = [[cos,     0,  sin,    0],
            [0,       1,  0,      0],
            [-sin,    0,  cos,    0],
            [0,       0,  0,      1]]

      Rz = [[cos,     -sin,   0,  0],
            [sin,     cos,    0,  0],
            [0,       0,      1,  0],
            [0,       0,      0,  1]]
      
      nA = np.add(np.dot(Rz, np.dot(Ry, np.dot(Rx, np.subtract(A, ponto)))), ponto)
      nB = np.add(np.dot(Rz, np.dot(Ry, np.dot(Rx, np.subtract(B, ponto)))), ponto)
      nC = np.add(np.dot(Rz, np.dot(Ry, np.dot(Rx, np.subtract(C, ponto)))), ponto)
      nD = np.add(np.dot(Rz, np.dot(Ry, np.dot(Rx, np.subtract(D, ponto)))), ponto)
      
      nA = [float(nA[0]), float(nA[1]), float(nA[2])]
      nB = [float(nB[0]), float(nB[1]), float(nB[2])]
      nC = [float(nC[0]), float(nC[1]), float(nC[2])]
      nD = [float(nD[0]), float(nD[1]), float(nD[2])]
      
      fig = plt.figure()
      ax = fig.add_subplot(projection='3d')
      ax.set_ylabel('Y')
      ax.set_xlabel('X')
      ax.set_xlim3d(-10, 10)
      ax.set_ylim3d(-10, 10)
      ax.set_zlim3d(-10, 10)
      ax.grid(False)

      # Desenhando os pontos A, B e C com as cores desejadas
      ax.scatter(nA[0], nA[1], nA[2], color='r', marker='o', s=50)
      ax.scatter(nB[0], nB[1], nB[2], color='g', marker='+', s=50)
      ax.scatter(nC[0], nC[1], nC[2], color='b', marker='*', s=50)
      ax.scatter(nD[0], nD[1], nD[2], color='y', marker='v', s=50)
 
      # 2 Desenhando os segmentos de reta ligando os pontos A, B e C
      ax.plot([nA[0], nB[0]], [nA[1], nB[1]], [nA[2], nB[2]], color='b', lw=0.5)
      ax.plot([nB[0], nC[0]], [nB[1], nC[1]], [nB[2], nC[2]], color='r', lw=0.5)
      ax.plot([nC[0], nA[0]], [nC[1], nA[1]], [nC[2], nA[2]], color='g', lw=0.5)
      ax.plot([nA[0], nD[0]], [nA[1], nD[1]], [nA[2], nD[2]], color='r', lw=0.5)
      ax.plot([nB[0], nD[0]], [nB[1], nD[1]], [nB[2], nD[2]], color='b', lw=0.5)
      ax.plot([nC[0], nD[0]], [nC[1], nD[1]], [nC[2], nD[2]], color='g', lw=0.5)
      
      plt.savefig(r'Rotacao\%dgraus.jpg' % i)
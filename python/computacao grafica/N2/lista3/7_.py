import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.widgets import Button

def bezier_cubic(p0, p1, p2, p3, t):
    # Função de interpolação cúbica de Bézier
    u = 1 - t
    t2 = t * t
    u2 = u * u
    u3 = u * u * u
    t3 = t * t * t

    x = u3 * p0[0] + 3 * u2 * t * p1[0] + 3 * u * t2 * p2[0] + t3 * p3[0]
    y = u3 * p0[1] + 3 * u2 * t * p1[1] + 3 * u * t2 * p2[1] + t3 * p3[1]
    z = u3 * p0[2] + 3 * u2 * t * p1[2] + 3 * u * t2 * p2[2] + t3 * p3[2]

    return x, y, z

def rotate_curve(event):
    # Rotação em torno da reta AB
    angle = np.deg2rad(10)  # Ângulo de rotação
    A = np.array([20, 30, 40])
    B = np.array([20, 100, 40])

    # Translação para a origem
    p0_new = p0 - A
    p1_new = p1 - A
    p2_new = p2 - A
    p3_new = p3 - A

    # Rotação em torno do eixo AB
    rotation_matrix = np.array([[np.cos(angle), -np.sin(angle)],
                                [np.sin(angle), np.cos(angle)]])
    p0_rotated = np.dot(rotation_matrix, p0_new[:2])
    p1_rotated = np.dot(rotation_matrix, p1_new[:2])
    p2_rotated = np.dot(rotation_matrix, p2_new[:2])
    p3_rotated = np.dot(rotation_matrix, p3_new[:2])

    # Translação de volta para a posição original
    p0_final = p0_rotated + A[:2]
    p1_final = p1_rotated + A[:2]
    p2_final = p2_rotated + A[:2]
    p3_final = p3_rotated + A[:2]

    # Atualiza os pontos de controle
    p0[0], p0[1] = p0_final[0], p0_final[1]
    p1[0], p1[1] = p1_final[0], p1_final[1]
    p2[0], p2[1] = p2_final[0], p2_final[1]
    p3[0], p3[1] = p3_final[0], p3_final[1]

    update_curve(event)

# Pontos de controle iniciais
p0 = np.array([0, 0, 0])
p1 = np.array([2, 4, 1])
p2 = np.array([5, 2, 3])
p3 = np.array([7, 5, 2])

# Parâmetros da curva (0 a 1)
t = np.linspace(0, 1, 100)

# Calcula as coordenadas iniciais da curva cúbica de Bézier
curve_x, curve_y, curve_z = bezier_cubic(p0, p1, p2, p3, t)

# Plota a curva 3D inicial
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
line, = ax.plot(curve_x, curve_y, curve_z)
points = ax.scatter([p0[0], p1[0], p2[0], p3[0]], [p0[1], p1[1], p2[1], p3[1]], [p0[2], p1[2], p2[2], p3[2]], color='red')
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

# Cria o botão de rotação
ax_button = plt.axes([0.8, 0.05, 0.1, 0.05])
button = Button(ax_button, 'Rotacionar')
button.on_clicked(rotate_curve)

# Função para atualizar a curva
def update_curve(event):
    curve_x, curve_y, curve_z = bezier_cubic(p0, p1, p2, p3, t)
    
    line.set_xdata(curve_x)
    line.set_ydata(curve_y)
    line.set_3d_properties(curve_z)

    points._offsets3d = ([p0[0], p1[0], p2[0], p3[0]],
                         [p0[1], p1[1], p2[1], p3[1]],
                         [p0[2], p1[2], p2[2], p3[2]])

    fig.canvas.draw_idle()

# Mostra o gráfico interativo
plt.show()

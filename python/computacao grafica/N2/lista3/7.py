import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

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

def update_curve(event):
    # Atualiza a curva cúbica de Bézier com os pontos de controle ajustados
    p0_new = np.array([s_x.val, s_y.val, s_z.val])
    p1_new = np.array([s_x1.val, s_y1.val, s_z1.val])
    p2_new = np.array([s_x2.val, s_y2.val, s_z2.val])
    p3_new = np.array([s_x3.val, s_y3.val, s_z3.val])

    curve_x, curve_y, curve_z = bezier_cubic(p0_new, p1_new, p2_new, p3_new, t)
    
    line.set_xdata(curve_x)
    line.set_ydata(curve_y)
    line.set_3d_properties(curve_z)

    points._offsets3d = ([p0_new[0], p1_new[0], p2_new[0], p3_new[0]],
                         [p0_new[1], p1_new[1], p2_new[1], p3_new[1]],
                         [p0_new[2], p1_new[2], p2_new[2], p3_new[2]])

    fig.canvas.draw_idle()

# Cria sliders interativos para ajustar os pontos de controle
axcolor = 'lightgoldenrodyellow'
ax_p0 = plt.axes([0.25, 0.1, 0.65, 0.03], facecolor=axcolor)
ax_p1 = plt.axes([0.25, 0.15, 0.65, 0.03], facecolor=axcolor)
ax_p2 = plt.axes([0.25, 0.2, 0.65, 0.03], facecolor=axcolor)
ax_p3 = plt.axes([0.25, 0.25, 0.65, 0.03], facecolor=axcolor)

s_x = plt.Slider(ax_p0, 'X0', -10.0, 10.0, valinit=p0[0])
s_y = plt.Slider(ax_p0, 'Y0', -10.0, 10.0, valinit=p0[1])
s_z = plt.Slider(ax_p0, 'Z0', -10.0, 10.0, valinit=p0[2])

s_x1 = plt.Slider(ax_p1, 'X1', -10.0, 10.0, valinit=p1[0])
s_y1 = plt.Slider(ax_p1, 'Y1', -10.0, 10.0, valinit=p1[1])
s_z1 = plt.Slider(ax_p1, 'Z1', -10.0, 10.0, valinit=p1[2])

s_x2 = plt.Slider(ax_p2, 'X2', -10.0, 10.0, valinit=p2[0])
s_y2 = plt.Slider(ax_p2, 'Y2', -10.0, 10.0, valinit=p2[1])
s_z2 = plt.Slider(ax_p2, 'Z2', -10.0, 10.0, valinit=p2[2])

s_x3 = plt.Slider(ax_p3, 'X3', -10.0, 10.0, valinit=p3[0])
s_y3 = plt.Slider(ax_p3, 'Y3', -10.0, 10.0, valinit=p3[1])
s_z3 = plt.Slider(ax_p3, 'Z3', -10.0, 10.0, valinit=p3[2])

s_x.on_changed(update_curve)
s_y.on_changed(update_curve)
s_z.on_changed(update_curve)

s_x1.on_changed(update_curve)
s_y1.on_changed(update_curve)
s_z1.on_changed(update_curve)

s_x2.on_changed(update_curve)
s_y2.on_changed(update_curve)
s_z2.on_changed(update_curve)

s_x3.on_changed(update_curve)
s_y3.on_changed(update_curve)
s_z3.on_changed(update_curve)

# Mostra o gráfico interativo
plt.show()

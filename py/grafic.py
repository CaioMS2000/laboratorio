import matplotlib.pyplot as plt
import numpy

fig = plt.figure(figsize=(10, 5))
ax1 = fig.add_subplot()
# ax1 = fig.add_subplot(121)
# ax2 = fig.add_subplot(122)

vec = list()

for i in range(10):
    vec.append(numpy.random.randint(1, 50, size=2))

print(vec)

for i in vec:
    pass

ax1.plot([1, 2], [1, 4], 'b')
ax1.plot([2, 2], [3, 7], 'b')
ax1.plot([6, 5], [3, 5], 'b')


plt.show()
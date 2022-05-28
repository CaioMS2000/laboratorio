import random
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from matplotlib import animation
import numpy
import time
from itertools import count

NODE_NUMBER = 5

class Coordinate:    
    def __init__(self, x, y):
        self.x =x
        self.y =y
    
    def __str__(self):
        return f'(X: {self.x} Y:{self.y})'
    
    
    @staticmethod
    def get_distance(a, b):
        return numpy.sqrt(numpy.abs(a.x - b.x) + numpy.abs(a.y - b.y))
    
    @staticmethod
    def get_total_distance(coords):
        dist = 0

        for first, second in zip(coords[:-1], coords[1:]):
            dist += Coordinate.get_distance(first, second)
        
        dist += Coordinate.get_distance(coords[0], coords[-1])
        return dist
    
    def print(self):
        print(f'X: {self.x} Y:{self.y}')

# if __name__ == '__main__':
if True:
    # fill up the coordinates
    coords = []
    data = [[2,5],[8,4],[1,6],[7,3],[10,9],]
    counter = 0

    for i in range(NODE_NUMBER): # set the number here
        # coords.append(Coordinate(numpy.random.uniform(), numpy.random.uniform()))
        # coords.append(Coordinate(numpy.random.randint(0, 10), numpy.random.randint(0, 10)))
        coords.append(Coordinate(data[counter][0], data[counter][1]))
        coords[len(coords)-1].print()
        counter = counter + 1
    
    # plot
    # fig = plt.figure(figsize=(10, 5))
    # ax1 = fig.add_subplot(121)
    # ax2 = fig.add_subplot(122)

    # for first, second in zip(coords[:-1], coords[1:]):
        # ax1.plot([first.x, second.x], [first.y, second.y], 'b')
    
    # ax1.plot([coords[0].x, coords[-1].x], [coords[0].y, coords[-1].y], 'b')

    # for c in coords:
    #     ax1.plot(c.x, c.y, 'ro')
    
    # simulated annealing
    cost0 = Coordinate.get_total_distance(coords)

    T = 30 # set
    factor = 0.99 # set
    T_init = T
    for i in range(1000): # set
        # print(i, 'cost = ', cost0)

        T = T * factor

        for j in range(100): # set
            r1, r2 = numpy.random.randint(0, len(coords), size=2)

            temp = coords[r1]
            coords[r1] = coords[r2]
            coords[r2] = temp

            # get new cost
            cost1 = Coordinate.get_total_distance(coords)

            if (cost1 < cost0):
                cost1 = cost0
            else:
                x = numpy.random.uniform()

                if x < numpy.exp((cost0-cost1) / T):
                    cost0 = cost1
                else:
                    temp = coords[r1]
                    coords[r1] = coords[r2]
                    coords[r2] = temp

# for first, second in zip(coords[:-1], coords[1:]):
#     print(f'({first.x}), ({second.x}), ({first.y}), ({second.y})')

zipped = zip(coords[:-1], coords[1:])
seconds = 1

coords2 = []
for z in zipped:
    coords2.append((z[0], z[1]))

size = len(coords2)
counter = count()

def animate(i):
    try:
        index = next(counter)
        # ax2.plot([coords2[index][0].x, coords2[index][1].x], [coords2[index][0].y, coords2[index][1].y])
        plt.plot([coords2[index][0].x, coords2[index][1].x], [coords2[index][0].y, coords2[index][1].y])
        print(f'X: {coords2[index][0].x} <--> {coords2[index][1].x}    Y: {coords2[index][0].y} <--> {coords2[index][1].y} ')
        plt.plot(coords2[index][0].x, coords2[index][0].y, 'ro')
        plt.plot(coords2[index][1].x, coords2[index][1].y, 'ro')
    except:
        plt.plot([coords[0].x, coords[-1].x], [coords[0].y, coords[-1].y])
        # plt.plot(coords2[index][0].x, coords2[index][0].y, 'ro')
        print(f'{coords[0].x}, {coords[-1].x}', end=' ')
        print(f'   {coords[0].y}, {coords[-1].y}')
        ani.event_source.stop()
        
    

ani = FuncAnimation(plt.gcf(), animate, interval= seconds * 1000)
# ani = FuncAnimation(ax2, animate, interval= seconds * 1000)
plt.show()
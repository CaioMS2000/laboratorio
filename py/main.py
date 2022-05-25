import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
import numpy
import time

NODE_NUMBER = 10

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

if __name__ == '__main__':
    # fill up the coordinates
    coords = []

    for i in range(NODE_NUMBER): # set the number here
        coords.append(Coordinate(numpy.random.uniform(), numpy.random.uniform()))
        coords[len(coords)-1].print()
    
    # plot
    fig = plt.figure(figsize=(10, 5))
    ax1 = fig.add_subplot(121)
    ax2 = fig.add_subplot(122)

    for first, second in zip(coords[:-1], coords[1:]):
        pass
    #     ax1.plot([first.x, second.x], [first.y, second.y], 'b')
    
    # ax1.plot([coords[0].x, coords[-1].x], [coords[0].y, coords[-1].y], 'b')

    # for c in coords:
    #     ax1.plot(c.x, c.y, 'ro')
    
    # simulated annealing
    cost0 = Coordinate.get_total_distance(coords)

    T = 30 # set
    factor = 0.99 # set
    T_init = T
    for i in range(1000): # set
        print(i, 'cost = ', cost0)

        T = T * factor

        for j in range(100): # set
            r1, r2 = numpy.random.randint(0, len(coords), size=2)

            temp = coords[r1]
            coords[1] = coords[2]
            coords[2] = temp

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
    
    print("\n\n")
    for c in coords:
        print(c)
    print("\n")
    # plot the result
    count = 0
    # ani = FuncAnimation(plt.gcf(), zip(coords[:-1], coords[1:]), interval=1000)
    for first, second in zip(coords[:-1], coords[1:]):
        ax1.plot([first.x, second.x], [first.y, second.y])
        ax2.plot([first.x, second.x], [first.y, second.y])
        print(f'({first.x}, {second.x} # {first.y}, {second.y}')
        count += 1
    
    print(f'\n{count} x \n')
    
    ax1.plot([coords[0].x, coords[-1].x], [coords[0].y, coords[-1].y])
    ax2.plot([coords[0].x, coords[-1].x], [coords[0].y, coords[-1].y])
    print(f'({coords[0].x}, {coords[-1].x} # {coords[0].y}, {coords[-1].y}')

    for c in coords:
        ax1.plot(c.x, c.y, 'ro')
    # for c in coords:
    #     ax2.plot(c.x, c.y, 'ro')
    

    plt.show()
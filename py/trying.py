# import matplotlib.pyplot as plt
# from matplotlib.animation import FuncAnimation
# import numpy

class Graph():

    def __init__(self, gdict= None):
        if gdict is None:
            gdict = {}
        
        self.gdict = gdict
    
    def edges(self):
        return self.findEdges()

    def AddEdge(self, edge):
        edge = set(edge)
        (v1, v2) = tuple(edge)

        if v1 in self.gdict:
            self.gdict[v1].append(v2)
        else:
            self.gdict[v1] = [v2]
    
    def findEdges(self):
        edgename = []

        for v in self.gdict:
            for nxt in self.gdict[v]:
                if {nxt, v} not in edgename:
                    edgename.append({v, nxt})
        
        return edgename

NODE_NUMBER = 5
LIMIT = 100

graph = []
weigth = []

for i in range(NODE_NUMBER):
    graph.append([])
    weigth.append([])

    for j in range(NODE_NUMBER):
        graph[len(graph) - 1].append(0)
        weigth[len(graph) - 1].append('N')


def print_graph(graph: list):
    for v in graph:
        for e in v:
            print(e, end=' ')
        print()

def add (a, b, w = 0):
    a = a - 1
    b = b - 1

    graph[a][b] = 1
    graph[b][a] = 1
    
    weigth[a][b] = w
    weigth[b][a] = w

def get_distance(a, b):
    return weigth[a][b]

def get_total_distance():
    d = 0

    for v in weigth:
        for e in v:
            if type(e) is not str:
                d = d + e
    
    return d

add(1,2, 4)
add(1,4, 5)
add(2,3, 1)
add(2,5, 3)
add(3,5, 2)
add(5,4, 2)

# print(graph, end="\n\n")
print_graph(graph)
print('\n')
print_graph(weigth)

# SA
cost = get_total_distance()
T = 30
factor = 0.9

for i in range(LIMIT):
    T = T * factor
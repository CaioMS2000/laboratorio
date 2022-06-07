import json
# import numpy
# import warnings

# warnings.filterwarnings('ignore')

data = {}
adj = []
NODES = 5
MAX = 1000

# WRITING INTO FILE ===================
# for i in range(NODES):
#     data[str(i)] = {}
#     for j in range(NODES):
#         if i != j:
#             data[str(i)][str(j)] = numpy.random.randint(1, 50)
#         else:
#             data[str(i)][str(j)] = 0

# json_string = json.dumps(data)

# with open('json_data.json', 'w') as outfile:
#     outfile.write(json_string)
# =====================================

# READING FROM FILE ===================
with open('json_data.json') as json_file:
    data = json.load(json_file)
    # print(data)

k1 = list(data.keys())

for a in k1:
    adj.append([])
    k2 = list(data[a].keys())
    p = len(adj) - 1
    p = 0 if p < 0 else p

    for b in k2:
        el = data[a][b]
        adj[p].append(el)
# =====================================

import numpy as np

def total_dist(route):
  d = 0.0  # total distance between cities
  n = len(route)
  for i in range(n-1):
    #   print(f'i: {i}\naponta para: {route[i]} e {route[i+1]}')
      d += adj[route[i]][route[i+1]]
    # if route[i] < route[i+1]:
    #   d += (route[i+1] - route[i]) * 1.0
    # else:
    #   d += (route[i] - route[i+1]) * 1.5
  
  return d

def error(route):
  n = len(route)
  d = total_dist(route)
  
  return d

def adjacent(route, rnd):
  n = len(route)
  result = np.copy(route)
  i = rnd.randint(n); j = rnd.randint(n)
  tmp = result[i]
  result[i] = result[j]; result[j] = tmp
  return result

def solve(n_cities, rnd, max_iter, 
  start_temperature, alpha):
  # solve using simulated annealing
  curr_temperature = start_temperature
  soln = np.arange(n_cities, dtype=np.int64)
  rnd.shuffle(soln)
  print("Caminho inicial: ")
  print(soln, end="\n\n")

  err = error(soln)
  iteration = 0
  _interval = (int)(max_iter / 10)
  interval = 10
  accept_p = 0.0
  while iteration < max_iter and err > 0.0:
    adj_route = adjacent(soln, rnd)
    adj_err = error(adj_route)

    if adj_err < err:  # better route so accept
      soln = adj_route; err = adj_err
    else:          # adjacent is worse
      accept_p = np.exp((err - adj_err) / curr_temperature)
      p = rnd.random()
      if p < accept_p:  # accept anyway
        soln = adj_route; err = adj_err 
      # else don't accept

    if iteration % interval == 0:
      print("iter = %6d | erro/dist = %7.2f | \
      temperatura = %10.4f " % \
      (iteration, err, curr_temperature))
        # print(f'iter = {iteration} | dist = {err} | ', end='')
        # print("temperatura = %.4f" % curr_temperature)
    if iteration == _interval:
        interval = _interval
        print()

    if curr_temperature < 0.00001:
      curr_temperature = 0.00001
    else:
      curr_temperature *= alpha
    iteration += 1

  return soln       

def main():
#   print("\nBegin TSP simulated annealing demo ")

  num_cities = NODES
  rnd = np.random.RandomState(4) 
  max_iter = 2500
  start_temperature = 10000.0
  alpha = 0.99

#   print("\nSetting num_cities = %d " % num_cities)
#   print("\nOptimal solution is 0, 1, 2, . . " + \
#     str(num_cities-1))
#   print("Optimal solution has total distance = %0.1f " \
#     % (num_cities-1))

#   print("\nSettings: ")
#   print("max_iter = %d " % max_iter)
#   print("start_temperature = %0.1f " \
#     % start_temperature)
#   print("alpha = %0.2f " % alpha)
  
#   print("\nStarting solve() ")
  soln = solve(num_cities, rnd, max_iter, 
    start_temperature, alpha)
#   print("Finished solve() ")

  print("\nMelhor solução: ")
  print(soln)
  dist = total_dist(soln)
  print("\nDistância total = %0.1f " % dist)

#   print("\nEnd demo ")

if __name__ == "__main__":
  main()

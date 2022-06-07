import json
import numpy
import warnings

warnings.filterwarnings('ignore')

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

def get_total_distance(arr):
    size = len(arr)
    limit = size - 1
    # print(f'arr: {arr}')
    # print(f'limit: {limit}')
    d = 0

    for i in range((limit - 1)):
        # print(f'{i} e {i+1}')
        d += adj[arr[i]][arr[i+1]]
    
    d+= adj[arr[limit]][arr[0]]
    # print(f'#{arr} -> {d}')
    return d

curr_temperature = 1000
iteration = 0
interval = (int)(MAX / 10)
accept_p = 0.0

sl = []
for i in range(NODES):
    sl.append(i)

for v in adj:
    for e in v:
        print(e, end=' ')
    print()
print("\n\n")

print("sl: ", end='')
print(sl)
while iteration < MAX:
    cost0 = get_total_distance(sl)

    new_sl = numpy.copy(sl)

    numpy.random.shuffle(new_sl)
    cost1 = get_total_distance(new_sl)

    if cost1 < cost0:
        sl = new_sl
    else:
        # print(f'cost0 {cost0}')
        # print(f'cost1 {cost1}')
        # print(f'curr_temperature {curr_temperature}')
        # print('\n')
        try:
            frag = (cost1 - cost0) / curr_temperature
            accept_p = numpy.exp(frag)
        except RuntimeWarning:
            print(f"{accept_p} will be considered")
        # print(f'Prob: {accept_p}')

        if numpy.random.uniform() < accept_p:
            sl = new_sl
    
    if curr_temperature < 0.0001:
      curr_temperature = 0.0001
    else:
      curr_temperature *= 0.9765
    
    if iteration % interval == 0:
        print('# This following result won\'t be considered')
        print(f'{sl} -> {get_total_distance(sl)}')
    
    iteration += 1

print("\n")
print(f'{sl} -> {get_total_distance(sl)}')
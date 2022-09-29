file = open('data_multivar_regr.txt', 'r')

x = []
y = []

# 2
for line in file:
    x.append([])

    v = line.split(',')
    v[3] = v[3].replace('\n', '')
    
    x[len(x) - 1].append(v[0])
    x[len(x) - 1].append(v[1])
    x[len(x) - 1].append(v[2])

    y.append(v[3])

# 3
num_treinamento = int(0,8*len(x))
num_teste = len(x) - num_treinamento

# 4
x_train = x[:num_treinamento]
y_train = y[:num_treinamento]

# 5
x_test = x[num_treinamento+1:]
y_test = y[num_treinamento+1:]
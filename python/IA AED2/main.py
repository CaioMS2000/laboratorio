import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error,mean_squared_error

dados = pd.read_csv('data_multivar_regr.txt')

x = dados.drop(['D'], axis=1).values
y = dados['D'].values

print(dados)
print("##############")
print("\n\n\n")

print(x)
print("##############")
print(y)
print("##############")
print("\n\n\n")

x_treino, x_teste, y_treino, y_teste = train_test_split(x, y, test_size=0.30, shuffle=True, random_state=0)

modelo = LinearRegression()
modelo.fit(x_treino,y_treino)

y_previsto = modelo.predict(x_teste)

absolERR = mean_absolute_error(y_teste,y_previsto)
quadERR = np.sqrt(mean_squared_error(y_teste,y_previsto))

print(y_previsto)
print("\n")

print('{:0.4f}'.format(absolERR))
print('{:0.4f}'.format(quadERR))

# file = open('data_multivar_regr.txt', 'r')

# x = []
# y = []

# # 2
# for line in file:
#     x.append([])

#     v = line.split(',')
#     v[3] = v[3].replace('\n', '')
    
#     x[len(x) - 1].append(v[0])
#     x[len(x) - 1].append(v[1])
#     x[len(x) - 1].append(v[2])

#     y.append(v[3])

# # 3
# num_treinamento = int(0,8*len(x))
# num_teste = len(x) - num_treinamento

# # 4
# x_train = x[:num_treinamento]
# y_train = y[:num_treinamento]

# # 5
# x_test = x[num_treinamento+1:]
# y_test = y[num_treinamento+1:]
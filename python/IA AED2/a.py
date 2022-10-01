import pandas as pd
import sklearn.model_selection as ms
import sklearn.linear_model as lm
import matplotlib.pyplot as plt
import numpy as np


######################################
# Importa o dataset
######################################
dataset = pd.read_csv("data_multivar_regr.txt")
dataset = dataset.dropna()

X = dataset.iloc[:, :-1]
y = dataset.iloc[:, -1].values

######################################
# Separar dados em Treino e Teste
######################################
X_train, X_test, y_train, y_test = ms.train_test_split(X, y, test_size = 0.2, random_state = 0)


######################################
# Treinando o modelo
######################################

regressor = lm.LinearRegression()
regressor.fit(X_train, y_train)

######################################
# Previsao
######################################

y_pred = regressor.predict(X_test)

np.set_printoptions(precision=2)
result = np.concatenate((y_pred.reshape(len(y_pred),1), y_test.reshape(len(y_test),1)),1)

X_test = X_test.reset_index(drop=True)

y_compare = pd.DataFrame(result)
y_compare = y_compare.rename(index=str, columns={0:'y_pred', 1:'y_test'})
y_compare = y_compare.reset_index(drop=True)

resultado_final = pd.concat([y_compare, X_test], axis=1)

print("Resultado")
print(resultado_final)


######################################
# Erro
######################################

from sklearn.metrics import mean_absolute_error,mean_squared_error

absolERR = mean_absolute_error(y_test, y_pred)
quadERR = np.sqrt(mean_squared_error(y_test, y_pred))

print(f'Absolute Error: {absolERR}')
print(f'Root Mean Squared Error: {quadERR}')

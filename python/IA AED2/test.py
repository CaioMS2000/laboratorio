import pandas as pd
import sklearn.model_selection as ms
import sklearn.linear_model as lm
import matplotlib.pyplot as plt

######################################
# Importa o dataset
######################################


dataset = pd.read_csv("data_multivar_regr.txt")
dataset = dataset.dropna()
X = dataset.iloc[:, :-1]
y = dataset.iloc[:, -1]

######################################
# Separar dados em Treino e Teste
######################################

X_train, X_test, y_train, y_test = ms.train_test_split(X, y, random_state = 0)


######################################
# Treinando o modelo
######################################

regressor = lm.LinearRegression()
regressor.fit(X_train, y_train)

######################################
# Previsao
######################################

y_pred = regressor.predict(X_test)

######################################
# Visualizando o treino
######################################

plt.scatter(X_train, y_train, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue', scaley=False)
plt.title('Treino')
plt.show()

######################################
# Visualizando o teste
######################################

plt.scatter(X_test, y_test, color = 'red')
plt.plot(X_train, regressor.predict(X_train), color = 'blue', scaley=False)
plt.title('Teste')
plt.show()

######################################
# Valor Especifico
######################################

print(regressor.predict([[10]]))

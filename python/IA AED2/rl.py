import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from   sklearn.linear_model import LinearRegression
from   sklearn.metrics import r2_score
import statsmodels.api as sm
import os

df_dados = pd.read_csv("data_multivar_regr.txt")

xs = df_dados.drop('D', axis=1)
# y = df_dados['D'].reshape(-1, 1)
y = df_dados['D']


reg = LinearRegression()
reg.fit(xs, y)

#=============================
f_previsaoes = reg.predict(xs)


plt.figure(figsize = (16,8))
plt.scatter(
    df_dados['A'], 
    df_dados['D'], 
    c='red')


plt.plot(
    df_dados['A'],
    f_previsaoes,
    c='blue',
    linewidth=3,
    linestyle=':'
)

# plt.xlabel(" ($) Gasto em propaganda de TV")
# plt.ylabel(" ($) Vendas")
plt.show()
#=============================

X = np.column_stack((df_dados['A'], df_dados['B'], df_dados['C']))
y = df_dados['D']


X2 = sm.add_constant(X)
est = sm.OLS(y, X2)
est2 = est.fit()


print(est2.summary())
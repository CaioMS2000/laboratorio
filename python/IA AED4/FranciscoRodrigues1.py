from os import system
system('clear')

import sklearn
from sklearn.datasets import make_blobs
import numpy as np
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 5))

k = 4
n = 200
data = make_blobs(n_samples= n, n_features= 2, centers= k, cluster_std= 1.5, random_state= 50)
x = data[0]
labels = data[1]

plt.scatter(x[:, 0], x[:, 1], c= labels, cmap= 'viridis', s= 50, alpha= 0.9)
plt.xlim(-15, 15)
plt.ylim(-15, 15)
plt.show(True)
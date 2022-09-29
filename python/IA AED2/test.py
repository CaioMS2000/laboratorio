v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

p = int(0.8*len(v))
print(f'serão {p} dado(s) de teste e {len(v)-p} dado(s) de treino')
print("dados de treino:", end=" ")
print(v[:p])
print("dados de teste:", end=" ")
print(v[p:])
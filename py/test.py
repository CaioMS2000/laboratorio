from itertools import count

counter = count()
vec = [1,2,3,4,5,6,7]

print(vec)
print(vec[:-1])
print(vec[1:])
print()

zipped = zip(vec[:-1], vec[1:])

coords2 = []
for z in zipped:
    print(z)
    coords2.append((z[0], z[1]))

print(f'\n({vec[0]}, {vec[-1]})')
print(coords2)

print("\n\n\n")
for i in range(10):
    c = next(counter)
    print(c)
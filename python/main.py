import os
os.system('clear')

BTMAX = 1
iter = 0
melhor_iter = 0
s0 = [0, 0, 0, 0]
fs0 = 0
T = []
alter = []

while(iter - melhor_iter <= BTMAX):
    print(f'iter: {iter}')
    iter += 1
    print(f's0: {s0}')
    print(f'Tabu: {T}\n')
    
    for i in range(4):
        copy = s0.copy()

        copy[i] = 1 if copy[i] == 0 else 0
        fs = 0

        for j in range(4):
            if copy[j] == 1:
                fs += 1

        alter.append([copy.copy(), int(fs)])
        copy = []
        fs = 0
    
    for x in range(4):
        print(alter[x])
    print('\n')

    index = 0
    for i in range(1, 4):
        aux_id = index
        index = i if alter[i][1] >= alter[index][1] else index

        if(alter[index][0] == T):
            index = aux_id
    
    print(f'indice da melhor das alterações: {index}')
    T = alter[index][0].copy()
    
    aux = alter[index][0].copy()
    fs = int(alter[index][1])

    if(fs > fs0):
        s0 = aux.copy()
        fs0 = int(fs)
        melhor_iter = iter

    alter = []
    print(f'{iter} - {melhor_iter} = {iter - melhor_iter}')
    print("\n\n")

# for x in range(4):
#     print(alter[x])
print(s0)
print(fs0)
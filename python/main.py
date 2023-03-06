# from os import system, chdir, listdir

# chdir('/home/estagiarioti/Downloads/imgs')

# dirs = listdir()
# img_file = ''

# for dir in dirs:
#     chdir(dir)

#     files = listdir()

#     for file in files:
#         aux = file.split('.')

#         if aux[len(aux)-1] == 'jpg':
#             img_file = file
    
#     if img_file:
#         system(f'code /home/estagiarioti/Downloads/imgs/{dir}/{img_file}')
    
#     chdir('..')

import os
from pathlib import Path

n_files = 7
paths = sorted(Path('/home/estagiarioti/Downloads/').iterdir(), key=os.path.getatime, reverse=True)

os.chdir('/home/estagiarioti/Downloads/')
os.mkdir('my_img')

# for path in paths:
    # print(path.split('/')[4])
    # print(path.name)

for i in range(0, n_files):
    os.mkdir(f'my_img/{i}')
    os.system(f'mv {paths[i].name} my_img/{i}/')
    os.system(f'gedit my_img/{i}/{paths[i].name}.txt')
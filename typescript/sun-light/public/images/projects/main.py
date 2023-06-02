from os import system, listdir, chdir, getcwd, mkdir

system('clear')

print(getcwd())

exceptions = ['main.py', 'small', 'meta.json', 'meta_.json']
projects = listdir()

for p in projects:
    if p not in exceptions:
        print(f'p: {p}')
        chdir(p)
        mkdir('small')

        files = listdir()
        for f in files:
            if f not in exceptions:
                system(f'cp {f} small')
        
        chdir('small')
        files = listdir()
        for f in files:
            if f not in exceptions:
                system(f'mogrify -resize "600x338>" -strip -interlace Plane -sampling-factor 4:2:0 -quality 93% \"{f}\"')

        # print(getcwd())
        chdir('..')
        # print(getcwd())
        chdir('..')
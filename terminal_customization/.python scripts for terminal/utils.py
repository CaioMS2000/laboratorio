from os import system, getcwd, mkdir, chdir

def create_file(file_name, extension= 'txt'):
    new_file = open(f'{file_name}.{extension}', 'w')
    new_file.close()

def add_in_alias(command_name):
    print(getcwd())
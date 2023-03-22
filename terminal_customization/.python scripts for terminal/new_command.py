from os import system, getcwd, mkdir, chdir
from sys import argv

from .utils import create_file

system('clear')

argv = argv[1:]

base_text = """from os import system, getcwd, mkdir, chdir
from sys import argv\n
"""

commands_archive = open('commands.txt', 'r')
available_commands = commands_archive.read().split('\n')
commands_archive.close()

if argv[0] not in available_commands:
    command_name = argv[0]

    commands_archive = open('commands.txt', 'a')
    commands_archive.write(f'\n{command_name}')

    create_file(f'{command_name}', 'py')

else:
    print("comando ja existe")

# commands_archive = open('commands.txt', 'a')
# commands_archive.close()
# commands_archive = open('commands.txt', 'r')
# print(commands_archive.read())
# commands_archive.close()
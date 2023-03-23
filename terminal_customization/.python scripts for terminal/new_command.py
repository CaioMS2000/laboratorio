from os import system, getcwd, mkdir, chdir
from sys import argv

print(getcwd())
from .utils import create_file, add_in_alias

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

    # commands_archive = open('commands.txt', 'a')
    # commands_archive.write(f'\n{command_name}')
    # commands_archive.close()

    # create_file(f'{command_name}', 'py')

    # command_file = open(f'{command_name}.py', 'w')
    # command_file.write(base_text)
    # command_file.close()

    add_in_alias(f'{command_name}')

else:
    print("comando ja existe")

# commands_archive = open('commands.txt', 'a')
# commands_archive.close()
# commands_archive = open('commands.txt', 'r')
# print(commands_archive.read())
# commands_archive.close()
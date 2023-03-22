def create_file(file_name, extension= 'txt'):
    new_file = open(f'{file_name}.{extension}', 'w')
    new_file.close()
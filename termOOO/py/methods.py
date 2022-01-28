from typing import Optional
import os
import platform

a: str = ''
a.lower()

def array_find_element(arr: [], el):
    """ Search for an element in an array an return it's index. If the element doesn't exist in the array, it returns None."""
    index: Optional[int] = None


    for i in range(len(arr)):
        if (arr[i] == el):
            index = i
            return True
    
    # return index
    return False

def string_find_element(arr: str, el):
    """ Search for an element in an string an return it's index. If the element doesn't exist in the string, it returns None."""
    index: Optional[int] = None


    for i in range(len(arr)):
        if (arr[i] == el):
            index = i
            return True
    
    # return index
    return False

def clear_console(OS: str = platform.system(), message = ''):
    if(array_find_element(['Linux', 'Darwin'], OS) != None):
        os.system('clear')
    else:
        os.system('cls')
    
    print('')

def add_word(arr: [], el, limit:int = 26):
    if len(arr) >= limit:
        print("You can't add more letters into this array")
    elif array_find_element(arr, el):
        print("This letter is already in this array")
    else:
        arr.append(el)

def print_words(array: [], white_filter: list = [], black_filter: list = [], exact_position: list = []):
    printable: list = []
    print('exact position')
    print(exact_position)
    print('==============\n')

    for w in array:
        valid: bool = False

        if len(white_filter) == 0 and len(black_filter) == 0:
            valid = True
        else:
            if len(white_filter) > 0:
                count: int = 0
                for l in w:
                
                    if array_find_element(white_filter, l):
                        valid = True
                    else:
                        valid = False
                    
                    count = count + 1
            else:
                valid = True
                
            if len(black_filter) > 0:
                count: int = 0
                for l in w:

                    if array_find_element(black_filter, l):
                        valid = False
                    
                    count = count + 1
        
        
        if len(exact_position) > 0:
            for p in range(len(exact_position)):
                # print(p, end=' ')
                if exact_position[p] != '':
                    # print(f'em {w}\ncomparando {exact_position[p].lower()} com {w[p].lower()}\n')
                    if w[p].lower() != exact_position[p].lower():
                        valid = False
                        # print(f'{w} não passou no teste')

        if valid == True:
            printable.append(w)

    count: int = 1
    for w in printable:
        print(w, end='   ')

        if count%8 == 0:
            print('\n')
        
        count = count + 1
    
    print(f'\n{len(printable)} words\n\n')
    # print(printable)
    # print('\n')
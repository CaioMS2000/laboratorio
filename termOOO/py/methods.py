from typing import Optional
import os
import platform


def array_find_element(arr: [], el):
    index: Optional[int] = None


    for i in range(len(arr)):
        if (arr[i] == el):
            index = i
            return True
    
    # return index
    return False

def string_find_element(arr: str, el):
    index: Optional[int] = None


    for i in range(len(arr)):
        if (arr[i] == el):
            index = i
            return True
    
    # return index
    return False

def clear_console(OS: str = platform.system(), message = ''):

    if(array_find_element(['Linux', 'Darwin'], OS)):
        os.system('clear')
    else:
        os.system('cls')
    
    # print(f'\n{OS}\n')    
    print(message, end='\n')

def add_word(arr: [], el, limit:int = 26, repeat = True):
    if len(arr) >= limit:
        print("You can't add more letters into this array")
    elif not repeat and array_find_element(arr, el):
        print("This letter is already in this array")
    else:
        arr.append(el)

def print_words(array: [], white_filter: list = [], black_filter: list = [], exact_position: list = []):
    printable: list = []
    print('exact position')
    print(exact_position)
    print('==============\n')

    for w in array:
        valid: bool = True

# filtering it self =================================
        if len(w) == 5:
            # print(f'{w}\n')       

            if len(black_filter) > 0:
                for l in black_filter:
                    if string_find_element(w, l):
                        valid = False
                    else:
                        pass

            if len(white_filter) > 0 and valid:
                for l in white_filter:
                    if not string_find_element(w, l):
                        valid = False
                    else:
                        pass
        
        
            if len(exact_position) > 0:
                for p in range(len(exact_position)):
                    if exact_position[p] != '':
                        if w[p] != exact_position[p]:
                            valid = False

            if valid == True:
                printable.append(w)
#====================================================

    print('\n')
    count: int = 1
    for w in printable:
        print(w, end='   ')

        if count%8 == 0:
            print('\n')
        
        count = count + 1
    
    print(f'\n{len(printable)} words\n\n')
    
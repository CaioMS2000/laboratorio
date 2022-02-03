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
    
    print(f'\n{OS}\n')
    
    print('', end='')

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

#====================================================
        if len(w) == 5:
            print(f'{w}\n')
            
            if len(white_filter) == 0:
                valid = True

            if len(black_filter) == 0:
                valid = True         

            if len(black_filter) > 0:
                for l in black_filter:
                    print(f'B: procurando {l} em {w}\n')
                    if string_find_element(w, l):
                        valid = False
                        print(f'achou\n')
                    else:
                        print(f'não achou\n')

            if len(white_filter) > 0 and valid:
                for l in white_filter:
                    print(f'W: procurando {l} em {w}\n')
                    if not string_find_element(w, l):
                        valid = False
                        print(f'não achou\n')
                    else:
                        print(f'achou\n')
                        valid = True
        
        
            # if len(exact_position) > 0:
            #     for p in range(len(exact_position)):
            #         if exact_position[p] != '':
            #             if w[p] != exact_position[p]:
            #                 valid = False

            # print(f'{valid}\n######\n')
            if valid == True:
                print(f"{w} entrou")
                printable.append(w)
#====================================================

    # print('\n')
    # count: int = 1
    # for w in printable:
    #     print(w, end='   ')

    #     if count%8 == 0:
    #         print('\n')
        
    #     count = count + 1
    
    array = printable
    print(f'\n{len(printable)} words\n\n')
    # print(printable)
    # print('\n')
    
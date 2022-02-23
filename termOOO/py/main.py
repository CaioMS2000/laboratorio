from selenium import webdriver
from selenium.webdriver.common.by import By
from unidecode import unidecode
from typing import List
from random import randint
from time import sleep

import methods
methods.clear_console()

all_words: List[str] = []
online = False

if not online:
    archive = open("words.txt", "r")

    for line in archive:
        all_words.append(line.replace("\n", ""))

    archive.close()

else:
# Web scraping ==================================
    print("Building a portuguese words database.\nPlease, you can minimize the browser window, but DON\'T CLOSE IT.\nThe browser window will close automatically.\n")
    driver = webdriver.Chrome()

    driver.minimize_window()
    driver.get("https://www.ime.usp.br/~pf/dicios/br-utf8.txt")

    DOM_element = driver.find_element(By.TAG_NAME, "pre")

    all_words: List[str] = DOM_element.text.split('\n')

    driver.quit()

# Removing accents and capital letters
    for i in range(len(all_words)):
        all_words[i] = unidecode(all_words[i])
        all_words[i] = all_words[i].lower()
#=================

# ===============================================
print("Database ready.\n\n")

# for w in all_words:
#     print(w)

# limit = len(all_words)
# all_words1: List[str] = all_words
# all_words = list()

# for i in range(50):
#     new_word = ''
#     while len(new_word) != 5:
#         new_word = all_words1[randint(0, limit-1)]

#     all_words.append(new_word)

# Word filtering ================================

word: str = ['', '', '', '', '']
excluded_letters: List[str] = []
included_letters: List[str] = []
word_size: int = 5
options: List[int] = [1, 2, 3, 4, 9]
option: int = 1
letter: str = ''
_print = True

while methods.array_find_element(options, option) != None:
    _print = True
    print("[1] to add a required word\n[2] to add a blocked word\n[3] to positionate a letter into the word\n[4] to get the current word\n[9] to RESET")
    print("\nq -> stop the program")

    option = input()

    if option.lower() == "q":
        methods.clear_console(message="\nFINISHING PROGRAM\n")
        sleep(2)
        methods.clear_console()
        break
    else:
        option = int(option)

        if not methods.array_find_element(options, option):
            methods.clear_console(message=f'{option}\nThis option is not valid!')
            _print = False
        else:
            if option == 1:
                letter = ''
                while letter != 'stop':
                    letter = input("Type a letter\n\"stop\" to left this option\n")

                    if len(letter) == 1:
                        methods.add_word(included_letters, letter, word_size)
            
            elif option == 2:
                letter = ''
                while letter != 'stop':
                    letter = input("Type a letter\n\"stop\" to left this option\n")

                    if len(letter) == 1:
                        methods.add_word(excluded_letters, letter)

            elif option == 3:

                pos:int = 1
                new_pos:int = 1

                while pos > 0 and new_pos > 0:
                    methods.clear_console()
                    
                    print(f"required letters:{included_letters}\nblocked letters: {excluded_letters}\ncurrent word: {word}\n")

                    print("Select a required word to be put in the word [1, 5]\n")
                    pos = int(input())
                    new_pos = int(input())

                    if pos > 0 and pos < 6 and new_pos > 0 and new_pos < 6:
                        if new_pos == -1:
                            word[pos] = ""
                        else:
                            pos = pos - 1
                            new_pos = new_pos - 1

                            word[new_pos] = included_letters[pos]
                            
                            pos = pos + 1
                            new_pos = new_pos + 1
                    elif pos == new_pos == 0:
                        print("Quiting\n")
                    else:
                        print("Some position is invalid!\n")
            
            elif option == 4:
                print('\n\n')
                print(word)
                print(included_letters)
                print(excluded_letters)
            
            elif option == 9:
                word: str = ['', '', '', '', '']
                excluded_letters: List[str] = []
                included_letters: List[str] = []
                
        
        print('\n\n')
        if _print:
            methods.print_words(all_words, included_letters, excluded_letters, word)

# ===============================================

# options = ChromeOptions()
# driver = webdriver.Chrome(options=options)
# driver.quit()
  
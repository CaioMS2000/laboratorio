from selenium import webdriver
from selenium.webdriver.common.by import By
from unidecode import unidecode
from typing import List

import methods
methods.clear_console()

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

print("Database ready.\n\n\n")
# ===============================================
all_words1: List[str] = all_words
all_words = list()

for i in range(0, 11):
    all_words.append(all_words1[i])

# Word filtering ================================
word: str = ['', '', '', '', '']
excluded_letters: List[str] = []
included_letters: List[str] = []
word_size: int = 5
options: List[int] = [1, 2, 3, 4]
option: int = 1
letter: str

methods.print_words(all_words, included_letters, excluded_letters, word)

while methods.array_find_element(options, option) != None:
    print("[1] para adicionar uma letra que existe na palavra\n[2] para adicionar uma letra que não existe na palavra\n[3] para posicionar uma letra na palavra\n[4] ver a palavra atual")

    option = int(input())

    if not methods.array_find_element(options, option):
        methods.clear_console('This option is not valid!')
    else:
        if option == 1:
            letter = ''
            while letter != 'stop':
                letter = input("Type a letter\n")

                if len(letter) == 1:
                    methods.add_word(included_letters, letter, 5)


            for i in range(len(included_letters)):
                word[i] = included_letters[i]
        
        elif option == 2:
            letter = ''
            while letter != 'stop':
                letter = input("Type a letter\n")

                if len(letter) == 1:
                    methods.add_word(excluded_letters, letter)

        elif option == 3:
            methods.clear_console()
            print(word)
            print()

            pos:int = 1
            new_pos:int = 1

            while pos > 0 and new_pos > 0:
                print("Selecione as duas posições a serem trocadas [1, 5]\n")
                pos = int(input())
                new_pos = int(input())

                if pos > 0 and pos < 6 and new_pos > 0 and new_pos < 6:
                    aux = word[pos]
                    word[pos] = word[new_pos]
                    word[new_pos] = aux
                else:
                    print("Some position is invalid!\n")
        else:
            # methods.clear_console()
            print('\n\n')
            print(word)
            print(included_letters)
            print(excluded_letters)
    
    # methods.clear_console()
    print('\n\n')
    methods.print_words(all_words, included_letters, excluded_letters, word)
# ===============================================

# options = ChromeOptions()
# driver = webdriver.Chrome(options=options)
# driver.quit()
  
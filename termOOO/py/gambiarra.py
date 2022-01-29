from selenium import webdriver
from selenium.webdriver.common.by import By
from unidecode import unidecode
from typing import List

def Convert(string):
    list1=[]
    list1[:0]=string
    
    return list1

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

def f1(a: str, strg: str):
    valid:[] = []
    b:list = Convert(strg)

    for c in b:
        pos = a.find(c)
        if pos > -1:
            valid.append(True)
    
    t1 = len(valid)
    t2 = len(b)

    if t1 == t2:
        return True
    
    return False

def f2(a: str, strg: str):
    valid:[] = []
    b:list = Convert(strg)

    for c in b:
        pos = a.find(c)
        if pos == -1:
            valid.append(True)
    
    t1 = len(valid)
    t2 = len(b)

    if t1 == t2:
        return True
    
    return False

# aux = all_words
# all_words = []
# while len(all_words) < 10:
#     for a in aux:
#         if len(a) == 5 and len(all_words) < 10:
#             all_words.append(a)


for word in all_words:
    if len(word) == 5:
        if f2(word, "coisburlx"):
            if f1(word, "am"):
                if word[4] == "e":
                    print(f"#{word}")
                    
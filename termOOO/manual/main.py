class Array:
    @staticmethod
    def index(array: [], element)->int:
        try:
            res = array.index(element)
            return res
        except ValueError:
            return -1

def Convert(string):
    list1=[]
    list1[:0]=string
    return list1

all_words = []
vogais = ['a', 'e', 'i', 'o', 'u']

archive = open("words.txt", "r")

for line in archive:
    all_words.append(line.replace("\n", ""))

archive.close()

aux = all_words
all_words = []
for word in aux:
    if len(word) == 5:
        all_words.append(word)

#=================================================
_res = []
for word in all_words:
    vec = Convert(word)

    # if Array.index(vec, 'u') > -1:
    #     if Array.index(vec, 'e') > -1:
    #         if Array.index(vec, 'a') == -1:
    #             if Array.index(vec, 'i') == -1:
    #                 if Array.index(vec, 'o') == -1:
    #                     _res.append(word)
    if Array.index(vec, 'b') > -1:
        if Array.index(vec, 'f') > -1:
            if Array.index(vec, 'p') > -1:
                    _res.append(word)
#=================================================

# Printing =======================================
count = 0
for word in _res:
    count = (count + 1) % 8
    print(word, end='   ')

    if count == 0:
        print('\n')
    

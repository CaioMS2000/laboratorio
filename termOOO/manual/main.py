vogais = ['a', 'e', 'i', 'o', 'u']
all_words = []

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

def count_vogals(w, n: int):
    if type(w) == str:
        w = Convert(w)
    
    count = 0
    for v in vogais:
        # if Array.index(w, v) > -1:
        #     count = count + 1
        while Array.index(w, 'e') > -1:
            count = count + 1
            w.remove('e')
    
    return count >= n

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

    if Array.index(vec, 'g') > -1:
        if count_vogals(vec, 2):
            _res.append(word)
#=================================================

# Printing =======================================
count = 0
for word in _res:
    count = (count + 1) % 15
    print(word, end='   ')

    if count == 0:
        print('\n')

# aguei toque
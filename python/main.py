import wget

# file = wget.download('https://opgg-static.akamaized.net/meta/images/lol/item/3052.png')
for index in range(0, 10000):
    try:
        file = wget.download(f'https://opgg-static.akamaized.net/meta/images/lol/item/{index}.png')
    except:
        print(f'{index} doesnt exists')
from os import system

def clear_console():
    system('clear')

class Matrix:
    def print(mtx):
        for arr in mtx:
            print(arr)


class List(list):
    # @staticmethod
    def print(self):
        for e in self:
            print(e)

    def __init__(self, iterable= {}):
        super().__init__(item for item in iterable)
    
    def __getitem__(self, index):
        item = super().__getitem__(index)
        return item

    def __setitem__(self, index, item):
        super().__setitem__(index, item)

    def insert(self, index, item):
        super().insert(index, item)

    def append(self, item):
        super().append(item)

    def extend(self, other):
        if isinstance(other, type(self)):
            super().extend(other)
        else:
            super().extend(item for item in other)

    def __call__(self, *args, **kwargs):
        return List(*args, **kwargs)


if __name__ == "__main__":
    system('clear')
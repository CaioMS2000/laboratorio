#include <stdio.h>
#include <stdlib.h>

#include "TWFLKDList.h"

int main(){
    struct List<int> l;

    l.insert(5);
    l.insert(6);
    l.insert(7);
    l.insert(8);
    l.list();
    printf("%d\n", l.quantity);

    printf("\n%d\n", l.exists(7));
    l.remove(7);
    printf("%d\n\n", l.exists(7));
    
    l.list();
    printf("%d\n", l.quantity);

    return 0;
}
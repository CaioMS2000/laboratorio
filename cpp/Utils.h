#pragma once

#include <iostream>
#include <stdio.h>

using std:: string;
using std:: cout;

namespace Caio{
    template<class T>
    void print(T element, string end = ""){
        cout << element << end;
    }
}
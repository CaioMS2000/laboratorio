#pragma once

#include <iostream>
#include <stdio.h>

using std::cout;
using std::string;

namespace Caio
{

    template <class T>
    void print(T element, string end = "")
    {
        cout << element << end;
    }

    template <class T>
    class Array
    {
    private:
    public:
        static void print(T arr[], int size)
        {
            size--;
            int i;

            for (i = 0; i < size; i++)
            {
                print(arr[i], " ");
            }
            print(arr[i], "\n");
        }

        static bool exists(T element, T arr[], int size){
            int i;

            for (i = 0; i < size; i++)
            {
                if(arr[i] == element){
                    return true;
                }
            }

            return false;
        }
    };
}
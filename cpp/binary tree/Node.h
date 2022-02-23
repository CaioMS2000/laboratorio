#pragma once

#include <iostream>

namespace Caio
{
    template <class T>
    class Node
    {
    private:
    public:
        ~Node()
        {
            left = nullptr;
            right = nullptr;
            std::cout << "\nNODE DESTRUCTED\n";
        }
        T data;
        Node<T> *left;
        Node<T> *right;
    };
}
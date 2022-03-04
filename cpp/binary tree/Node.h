#pragma once

#include <iostream>

namespace Caio
{
    template <class T>
    class Node
    {
    private:
    public:
        T data;
        Node<T> *left;
        Node<T> *right;

        Node(){};
        Node(T data)
        {
            this->data = data;
        }
        ~Node()
        {
            left = nullptr;
            right = nullptr;
            std::cout << "\nNODE DESTRUCTED\n";
        }
    };
}
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

        Node(){
            left = nullptr;
            right = nullptr;
        };
        Node(T data)
        {
            this->data = data;
            left = nullptr;
            right = nullptr;
        }
        ~Node()
        {
            left = nullptr;
            right = nullptr;
            std::cout << "\nNODE DESTRUCTED\n";
        }
    };
}
#pragma once

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
        }
        T data;
        Node<T> *left;
        Node<T> *right;
    };
}
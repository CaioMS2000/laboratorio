#pragma once

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
    };
}
#pragma once

#include <iostream>

#include "Node.h"

using std::cout;

namespace Caio
{
    using namespace Caio;

    template <class T>
    class BnTree
    {
    private:
        Node<T> *root = nullptr;
        void ADD(Node<T> **n, T element);

        void _infixa(Node<T> **node)
        {
            // cout << node << "\n";
            if ((*node)->left != nullptr and (*node)->left != 0)
            {
                // cout << "indo pra esquerda\n";
                _infixa(&((*node)->left));
            }
            cout << (*node)->data << "\n";
            if ((*node)->right != nullptr and (*node)->right != 0)
            {
                // cout << "indo pra direita\n";
                _infixa(&((*node)->right));
            }
        }

    public:
        BnTree()
        {
            // std::cout << "new empty tree\n";
        }

        void add(T element);
        inline Node<T> *get_root() { return root; }
        void infixa()
        {
            _infixa(&root);
            return;
        }
    };

    template <class T>
    void BnTree<T>::ADD(Node<T> **n, T element)
    {
        if ((*n) == nullptr || (*n) == 0)
        {
            (*n) = new Node<T>;
            (*n)->data = element;
            return;
        }

        if ((*n)->data > element)
        {
            return ADD(&((*n)->left), element);
        }

        return ADD(&((*n)->right), element);
    }

    template <class T>
    void BnTree<T>::add(T element)
    {
        ADD(&root, element);
    }
}
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
            cout << (*node)->data << " ";
            if ((*node)->right != nullptr and (*node)->right != 0)
            {
                // cout << "indo pra direita\n";
                _infixa(&((*node)->right));
            }
        }

        bool _exists(T element, Node<T> **node);
        void _remove(T element, Node<T> **node, Node<T> **parent = nullptr);

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
            cout << "\n";
            return;
        }
        inline bool exists(T element) { return _exists(element, &root); }
        void remove(T element)
        {
            if (!exists(element))
            {
                cout << element << " doesnt exist in tree\n";
            }
            else
            {
                _remove(element, &root);
            }
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

    template <class T>
    bool BnTree<T>::_exists(T element, Node<T> **node)
    {
        if ((*node) == nullptr)
        {
            return false;
        }
        else
        {
            if ((*node)->data == element)
                return true;
            else
            {
                if ((*node)->data > element)
                {
                    cout << element << " eh menor que " << (*node)->data << " -> esquerda\n";
                    return _exists(element, &((*node)->left));
                }
                else
                {
                    cout << element << " eh maior que " << (*node)->data << " -> direita\n";
                    return _exists(element, &((*node)->right));
                }
            }
        }
        // so pra tirar warning
        return false;
    }

    template <class T>
    void BnTree<T>::_remove(T element, Node<T> **node, Node<T> **parent)
    {
        if ((*node) != nullptr)
        {
            if (element < (*node)->data)
            {
                return _remove(element, &((*node)->left), parent);
            }
            else
            {
                return _remove(element, &((*node)->right), parent);
            }

            if ((*node)->right == nullptr && (*node)->left == nullptr)
            { // nó folha
                delete *node;
                (*node) = nullptr;
            }
            else
            {
                if ((*node)->right != nullptr && (*node)->left != nullptr)
                {
                    // nó com 2 sub arvores
                    bool stop = false;
                    Node<T> **n = &((*node)->right);

                    while (!stop)
                    {
                        if ((*n)->left != nullptr)
                        {
                            parent = &(*n);
                            n = &((*n)->left);
                        }
                        else
                        {
                            stop = true;
                        }
                    }

                    (*parent)->left = (*n)->right;
                    (*node)->data = (*n)->data;
                    delete *n;
                }
                else if ((*parent) != nullptr)
                {
                    // nó com 1 sub arvore
                    if ((*node)->right != nullptr)
                    {
                        *parent = (*node)->right;
                    }
                    else
                    {
                        *parent = (*node)->left;
                    }
                }
                else
                    cout << "Need a parent pointer\n";
            }

            delete *node;
            (*node) = nullptr;
            return;
        }
    }
} // namespace
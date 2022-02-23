#pragma once

#include <iostream>
#include <stdlib.h>

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
            if ((*node)->left != nullptr and (*node)->left != 0)
            {
                _infixa(&((*node)->left));
            }
            cout << (*node)->data << " ";
            if ((*node)->right != nullptr and (*node)->right != 0)
            {
                _infixa(&((*node)->right));
            }
        }

        bool _exists(T element, Node<T> **node);
        void _remove(T element, Node<T> **node);

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
        else if ((*n)->data < element)
        {
            return ADD(&((*n)->right), element);
        }

        cout << element << " it's already in the tree\n";
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
                    return _exists(element, &((*node)->left));
                }
                else
                {
                    return _exists(element, &((*node)->right));
                }
            }
        }
        // so pra tirar warning
        return false;
    }

    template <class T>
    void BnTree<T>::_remove(T element, Node<T> **node)
    {
        Node<T> **parent = &(*node);
        Node<T> **aux;

        // achar o nó que será removido
        while (node != nullptr and (*node)->data != element)
        {
            parent = &(*node);

            if (element < (*node)->data)
                node = &((*node)->left);
            else if (element > (*node)->data)
                node = &((*node)->right);
        }

        if ((*node) != nullptr)
        { // nó encontrado
            // nó com 2 subarvores
            if ((*node)->left != nullptr and (*node)->right != nullptr)
            {
                cout << element << " possui 2 subarvores\n";

                aux = parent = node;
                node = &((*node)->right);

                while ((*node)->left != nullptr)
                { // procurar o menor entre os maiores que o nó a ser removido
                    parent = node;
                    node = &((*node)->left);
                }

                (*aux)->data = (*node)->data;

                (*parent)->right = (*node)->right;
            }

            // nó com 1 subarvore
            else if ((*node)->left != nullptr)
            { // subarvore na esquerda
                cout << element << " possui apenas subarvore na esquerda\n";

                (*parent)->left = (*node)->left;
            }
            else if ((*node)->right != nullptr)
            { // subarvore na direita
                cout << element << " possui apenas subarvore na direita\n";
                (*parent)->right = (*node)->right;
            }

            // nó folha
            else
            {
                cout << element << " eh um no folha\n";

                if ((*parent)->right->data == (*node)->data)
                {
                    (*parent)->right = nullptr;
                }
                else
                {
                    (*parent)->left = nullptr;
                }
            }

            delete *node;
        }
    }
} // namespace
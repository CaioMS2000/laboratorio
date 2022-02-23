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
        Node<T> *root;

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
        int _heigth(Node<T> **node);
        void _LL(Node<T> **node);
        void _RR(Node<T> **node);
        void _LR(Node<T> **node);
        void _RL(Node<T> **node);

    public:
        BnTree()
        {
            // std::cout << "new empty tree\n";
            root = nullptr;
        }

        void add(T element);
        inline int heigth(Node<T> **node = nullptr) { return _heigth(node == nullptr ? &root : node); }
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
        void LL(Node<T> **node = nullptr) { _LL(*node == nullptr ? &root : node); }
        void RR(Node<T> **node = nullptr) { _RR(*node == nullptr ? &root : node); }
        void LR(Node<T> **node = nullptr) { _LR(*node == nullptr ? &root : node); }
        void RL(Node<T> **node = nullptr) { _RL(*node == nullptr ? &root : node); }
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
            ADD(&((*n)->left), element);
            cout << element << " foi inserido na esquerda\n";

            int balance = heigth(&((*n)->left)) - heigth(&((*n)->right));

            if (balance > 1 or balance < -1)
            {
                if (element < (*n)->left->data)
                {
                    LL(n);
                    cout << element << " nao falhou\n";
                }
                else
                {
                    LR(n);
                    cout << element << " nao falhou\n";
                }
            }

            // return;
        }
        else if ((*n)->data < element)
        {
            ADD(&((*n)->right), element);
            cout << element << " foi inserido na direita\n";

            int balance = heigth(&((*n)->left)) - heigth(&((*n)->right));

            if (balance > 1 or balance < -1)
            {
                if (element < (*n)->right->data)
                {
                    RR(n);
                    cout << element << " nao falhou\n";
                }
                else
                {
                    RL(n);
                    cout << element << " nao falhou\n";
                }
            }

            // return;
        }
        else
        {
            cout << element << " it's already in the tree\n";
        }
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
                if ((*parent)->right != nullptr and (*parent)->right->data == (*node)->data)
                {
                    (*parent)->right = nullptr;
                }
                else
                {
                    (*parent)->left = nullptr;
                }
            }

            // delete *node;
        }
    }

    template <class T>
    int BnTree<T>::_heigth(Node<T> **node)
    {
        if (node == nullptr)
            return 0;
        if (*node == nullptr)
            return 0;

        int left = _heigth(&((*node)->left));
        int right = _heigth(&((*node)->right));

        return (1 + (left > right ? left : right));
    }

    template <class T>
    void BnTree<T>::_LL(Node<T> **node)
    {
        Node<T> **aux = &((*node)->left);

        (*node)->left = (*aux)->right;
        (*aux)->right = *node;
        *node = *aux;
    }

    template <class T>
    void BnTree<T>::_RR(Node<T> **node)
    {
        Node<T> **aux = &((*node)->right);

        (*node)->right = (*aux)->left;
        (*aux)->left = *node;
        *node = *aux;
    }

    template <class T>
    void BnTree<T>::_LR(Node<T> **node)
    {
        _RR(&((*node)->left));
        _LL(node);
    }

    template <class T>
    void BnTree<T>::_RL(Node<T> **node)
    {
        _LL(&((*node)->right));
        _RR(node);
    }
} // namespace
#pragma once

#include <iostream>
#include <stdlib.h>

#include "Node.h"

using std::cout;

namespace Caio
{

    template <class T>
    class AVLTree
    {
    private:
        void delete_tree(Node<T> *node)
        {
            if (node != nullptr)
            {
                delete_tree(node->left);
                delete_tree(node->right);

                delete node;
                node = nullptr;
            }
        }

        bool _add(T element, Node<T> **node);
        bool _remove(T element, Node<T> **node);
        void _preorder(Node<T> **node);
        void _inorder(Node<T> **node);
        void _postorder(Node<T> **node);

        int _heigth(Node<T> **node)
        {
            if (node == nullptr or *node == nullptr)
                return -1;

            // cout << (*node)->data << " nao eh nulo\n";

            return ((_heigth(&((*node)->left)) > _heigth(&((*node)->right)) ? _heigth(&((*node)->left)) : _heigth(&((*node)->right))) + 1);
        }

        void LL(Node<T> **node)
        {
            Node<T> **aux = &((*node)->left);
            cout << "passou\n";

            (*node)->left = (*aux)->right;
            (*aux)->right = *node;
            *node = *aux;
            // if (aux != nullptr)
            // {
            //     (*node)->left = (*aux)->right;
            //     (*aux)->right = *node;
            //     *node = *aux;
            // }
        }

        void RR(Node<T> **node)
        {
            Node<T> **aux = &((*node)->right);

            (*node)->right = (*aux)->left;
            (*aux)->left = *node;
            *node = *aux;
            // if (aux != nullptr)
            // {
            //     (*node)->right = (*aux)->left;
            //     (*aux)->left = *node;
            //     *node = *aux;
            // }
        }

        void LR(Node<T> **node)
        {
            RR(&((*node)->left));
            LL(node);
        }

        void RL(Node<T> **node)
        {
            LL(&((*node)->right));
            RR(node);
        }

    public:
        Node<T> *root;

        AVLTree()
        {
            root = nullptr;
        }
        AVLTree(T element)
        {
            root = new Node<T>(element);
        }
        ~AVLTree()
        {
            delete_tree(this->root);
            cout << "\nTREE DESTRUCTED\n";
        }

        bool add(T element)
        {
            bool res = _add(element, &root);
            cout << "inserção finalizada\n\n";
            return res;
        }
        bool remove(T element) { return _remove(element, &root); }
        void preorder()
        {
            _preorder(&root);
            cout << "\n";
        }
        void inorder()
        {
            _inorder(&root);
            cout << "\n";
        }
        void postorder()
        {
            _postorder(&root);
            cout << "\n";
        }

        int heigth(T *ptr = nullptr);
    };

    template <class T>
    bool AVLTree<T>::_add(T element, Node<T> **node)
    {
        cout << "inserindo " << element << "\n";
        bool res;

        if (root == nullptr)
        {
            root = new Node<T>(element);
            cout << "raiz " << element << " criada\n";
            return true;
        }
        // else if (node == nullptr or (*node) == nullptr)
        else if ((*node) == nullptr)
        {
            *node = new Node<T>(element);
            cout << "nó " << element << " criado\n";
            return true;
        }

        if (element < (*node)->data)
        {
            cout << "de " << (*node)->data << " indo para a esquerda\n";
            res = _add(element, &((*node)->left));
            cout << "res1: " << res << "\n";

            int hl = _heigth(&((*node)->left));
            int hr = _heigth(&((*node)->right));
            int fb = hl - hr;
            fb = fb < 0 ? fb * -1 : fb;

            cout << "#" << (*node)->data << "\n";
            cout << (*node)->left->data << " na esquerda\n";
            if (fb > 1 and (*node)->left != nullptr)
            {
                cout << element << " rotacionando\n";
                cout << (*node)->left->data << " sdfsd\n";
                cout << (*node)->left->data << " sdfsd\n";
                cout << (*node)->left->data << " sdfsd\n";
                cout << (*node)->left->data << " sdfsd\n";
                if (element < (*node)->left->data)
                {
                    cout << "aqui\n";
                    LL(node);
                }
                else
                {
                    cout << "ou aqui";
                    LR(node);
                }
            }
            else{
                cout << "rotação não realizada\n";
            }

            cout << element << " retornando\n";
            return res;
        }
        else if (element > (*node)->data)
        {
            cout << "de " << (*node)->data << " indo para a direita\n";
            res = _add(element, &((*node)->right));
            cout << "res2: " << res << "\n";

            int hl = _heigth(&((*node)->left));
            int hr = _heigth(&((*node)->right));
            int fb = hl - hr;
            fb = fb < 0 ? fb * (-1) : fb;

            cout << "#" << (*node)->data << "\n";
            cout << (*node)->right->data << " na direita\n";
            if (fb > 1 and (*node)->right != nullptr)
            {
                cout << (*node)->right->data << "sdfsd\n";
                cout << element << " rotacionando\n"
                     << (*node)->right << "\n";
                if (element > (*node)->right->data)
                {
                    cout << "aqui\n";
                    RR(node);
                }
                else
                {
                    cout << "ou aqui";
                    RL(node);
                }
            }
            else{
                cout << "rotação não realizada\n";
            }

            return res;
        }

        return false;
    }

    template <class T>
    bool AVLTree<T>::_remove(T element, Node<T> **node)
    {
        Node<T> **aux = node;
        int c = 0;

        while (node != nullptr and element != (*node)->data)
        {
            c++;
            aux = node;
            if (element < ((*node)->data))
                node = &((*node)->left);
            else
                node = &((*node)->right);
        }

        if (node != nullptr)
        { // achou o elemento
            if ((*node)->left == nullptr and (*node)->right == nullptr)
            { // nó folha
                if ((*aux)->left != nullptr and (*aux)->left->data == (*node)->data)
                {
                    (*aux)->left = nullptr;
                }
                else
                {
                    (*aux)->right = nullptr;
                }
            }
            else if ((*node)->left == nullptr and (*node)->right != nullptr)
            { // só tem filho à direita
                if ((*aux)->left != nullptr and (*aux)->left->data == (*node)->data)
                    (*aux)->left = (*node)->right;
                else
                    (*aux)->right = (*node)->right;
            }
            else if ((*node)->left != nullptr and (*node)->right == nullptr)
            { // só tem filho à esquerda
                if ((*node)->left == nullptr and (*aux)->left->data == (*node)->data)
                    (*aux)->left = (*node)->left;
                else
                    (*aux)->right = (*node)->left;
            }
            else
            { // dois filhos
                Node<T> **fixed = aux = node;
                node = &((*node)->right);

                while ((*node)->left != nullptr)
                {
                    aux = node;
                    node = &((*node)->left);
                }

                (*fixed)->data = (*node)->data;
                (*fixed)->right = (*node)->right;
            }

            // delete node;
            // cout << "deletando " << (*node)->data << "\n";
            node = nullptr;
            return true;
        }

        return false;
    }

    template <class T>
    int AVLTree<T>::heigth(T *ptr)
    {
        if (ptr == nullptr)
            return _heigth(&root);

        Node<T> **node = &root;

        while ((*node)->data != *ptr and node != nullptr)
        {
            node = *ptr < (*node)->data ? &((*node)->left) : &((*node)->right);
        }

        if (node != nullptr)
        {
            return _heigth(node);
        }

        cout << "cant calculate heigth\n";
        return -1;
    }

    template <class T>
    void AVLTree<T>::_preorder(Node<T> **node)
    {
        if (node != nullptr and *node != nullptr)
        {
            cout << (*node)->data << "  ";
            _preorder(&((*node)->left));
            _preorder(&((*node)->right));
        }
    }
    template <class T>
    void AVLTree<T>::_inorder(Node<T> **node)
    {
        if (node != nullptr and *node != nullptr)
        {
            _inorder(&((*node)->left));
            cout << (*node)->data << "  ";
            _inorder(&((*node)->right));
        }
    }

    template <class T>
    void AVLTree<T>::_postorder(Node<T> **node)
    {
        if (node != nullptr and *node != nullptr)
        {
            _postorder(&((*node)->left));
            _postorder(&((*node)->right));
            cout << (*node)->data << "  ";
        }
    }
} // namespace
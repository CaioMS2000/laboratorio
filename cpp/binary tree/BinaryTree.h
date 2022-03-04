#pragma once

#include <iostream>
#include <stdlib.h>

#include "Node.h"

using std::cout;

namespace Caio
{

    template <class T>
    class BnTree
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

        bool _add(T element, Node<T> *&node);
        bool _remove(T element, Node<T> *&node);
        void _preorder(Node<T> *&node);
        void _inorder(Node<T> *&node);
        void _postorder(Node<T> *&node);

    public:
        Node<T> *root;

        BnTree()
        {
            root = nullptr;
        }
        BnTree(T element)
        {
            root = new Node<T>(element);
        }
        ~BnTree()
        {
            delete_tree(this->root);
            cout << "\nTREE DESTRUCTED\n";
        }

        bool add(T element) { return _add(element, root); }
        bool remove(T element) { return _remove(element, root); }
        void preorder()
        {
            _preorder(root);
            cout << "\n";
        }
        void inorder()
        {
            _inorder(root);
            cout << "\n";
        }
        void postorder()
        {
            _postorder(root);
            cout << "\n";
        }
    };

    template <class T>
    bool BnTree<T>::_add(T element, Node<T> *&node)
    {
        if (root == nullptr)
        {
            root = new Node<T>(element);
            return true;
        }
        else if (node == nullptr)
        {
            node = new Node<T>(element);
            return true;
        }
        else
        {
            if (element < node->data)
            {
                return _add(element, node->left);
            }
            else if (element > node->data)
            {
                return _add(element, node->right);
            }
        }

        return false;
    }

    template<class T>
    bool BnTree<T>::_remove(T element, Node<T> *&node){
        Node<T> *aux = node;
        int c = 0;

        while(node != nullptr and element != node->data){
            c++;
            aux = node;
            if(element < node->data)
                node = &(*node->left);
            else
                node = &(*node->right);
        }

        if(node != nullptr){//achou o elemento
            if(node->left == nullptr and node->right == nullptr){// nó folha
                if(aux->left != nullptr and aux->left->data == node->data){
                    aux->left = nullptr;
                }
                else{
                    aux->right = nullptr;
                }
                cout << "mecheu no " << aux->data << "\n";
            }
            else if(node->left == nullptr and node->right != nullptr){// só tem filho à direita
                if(aux->left != nullptr and aux->left->data == node->data)
                    aux->left = node->right;
                else
                    aux->right = node->right;
                
            }
            else if(node->left != nullptr and node->right == nullptr){// só tem filho à esquerda
                if(node->left == nullptr and aux->left->data == node->data)
                    aux->left = node->left;
                else
                    aux->right = node->left;
                
            }
            else{// dois filhos
                
            }

            // delete node;
            cout << "deletando " << node->data << "\n";
            node = nullptr;
            return true;
        }
        
        return false;
    }

    template <class T>
    void BnTree<T>::_preorder(Node<T> *&node)
    {
        if (node != nullptr)
        {
            cout << node->data << "  ";
            _preorder(node->left);
            _preorder(node->right);
        }
    }
    template <class T>
    void BnTree<T>::_inorder(Node<T> *&node)
    {
        if (node != nullptr)
        {
            _inorder(node->left);
            cout << node->data << "  ";
            _inorder(node->right);
        }
    }

    template <class T>
    void BnTree<T>::_postorder(Node<T> *&node)
    {
        if (node != nullptr)
        {
            _postorder(node->left);
            _postorder(node->right);
            cout << node->data << "  ";
        }
    }
} // namespace
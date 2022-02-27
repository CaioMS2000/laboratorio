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

        bool _add(T element, Node<T> *node);
        int _height(Node<T> *node);

    public:
        Node<T> *root;

        BnTree()
        {
            root = nullptr;
        }
        ~BnTree()
        {
            delete_tree(this->root);
            cout << "TREE DESTRUCTED\n";
        }

        bool add(T element) { return _add(element, root); }
        int height() { return _height(root); }
    };

    template <class T>
    bool BnTree<T>::_add(T element, Node<T> *node)
    {
        if (node == nullptr)
        {
            if (root == nullptr)
            {
                root = new Node<T>(element);
            }
            else
            {
                node = new Node<T>(element);
            }

            return true;
        }
        else
        {
            if (element < node->data)
                return _add(element, node->left);
            else if (element > node->data)
                return _add(element, node->right);
        }

        return false;
    }

    template <class T>
    int _height(Node<T> *node)
    {
        if (node == nullptr)
            return 0;

        int left_height = _height(node->left);
        int right_height = _height(node->right);

        return ((left_height > right_height ? left_height : right_height) + 1);
    }
} // namespace
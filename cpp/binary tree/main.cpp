#include <cstdlib>

#include "BinaryTree.h"

using namespace std;

int main(void)
{
    system("clear");
    Caio::BnTree<int> tree;
    tree.add(5);
    Caio::Node<int> *node = tree.get_root();

    tree.add(2);
    tree.add(8);
    tree.infixa();
}
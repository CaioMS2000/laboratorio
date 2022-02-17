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

    string res = tree.exists(2) ? "existe" : "nao existe";
    cout << "\n\n"
         << res << "\n";

    tree.remove(8);
    tree.infixa();
}
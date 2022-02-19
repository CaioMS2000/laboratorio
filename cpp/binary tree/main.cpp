#include <cstdlib>

#include "BinaryTree.h"

using namespace std;

int main(void)
{
    system("clear");
    Caio::BnTree<int> tree;
    tree.add(10);
    Caio::Node<int> *node = tree.get_root();
// 10, 9, 11, 4, 5, 12, 15, 14, 18
    tree.add(9);
    tree.add(11);
    tree.add(4);
    tree.add(5);
    tree.add(12);
    tree.add(15);
    tree.add(14);
    tree.add(18);
    tree.infixa();

    // string res = tree.exists(2) ? "existe" : "nao existe";
    // cout << "\n\n"
    //      << res << "\n";

    tree.remove(15);
    tree.infixa();
}
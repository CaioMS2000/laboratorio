#include <cstdlib>

#include "BinaryTree.h"

using namespace std;

int main(void)
{
// 10, 9, 11, 4, 5, 12, 15, 14, 18

#if defined(__linux__) || defined(__APPLE__)
    system("clear");
#endif
#ifdef _WIN64
    system("cls");
#endif

    Caio::BnTree<int> tree;
    tree.add(10);
    tree.add(9);
    tree.add(11);
    tree.add(4);
    tree.add(5);
    tree.add(12);
    tree.add(15);
    tree.add(14);
    tree.add(18);
    tree.add(18);

    tree.infixa();

    tree.remove(18);
    tree.infixa();
}
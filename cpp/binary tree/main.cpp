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
    Caio::BnTree<int> tree2;

    // tree.add(10);
    // tree.add(9);

    cout << tree.height() << "\n";
}
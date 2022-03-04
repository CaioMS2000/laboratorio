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

    Caio::BnTree<int> tree(10);

    tree.add(9);
    tree.add(11);
    tree.add(4);
    tree.add(5);

    cout << "\n#####\n";
    tree.inorder();
    cout << "\n#\n";
    cout << tree.root << "\n";
    tree.remove(5);
    cout << tree.root << "\n";
    cout << "\n#\n";
    tree.inorder();
    // tree.postorder();
    // tree.preorder();
}
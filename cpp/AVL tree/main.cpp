#include <cstdlib>

#include "AVLTree.h"

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

    Caio::AVLTree<int> tree(10);

    tree.add(9);
    cout << "\n";
    tree.add(11);
    cout << "\n";
    tree.add(4);
    cout << "\n";
    tree.add(5);
    cout << "\n";
    tree.add(12);
    cout << "\n";
    tree.add(15);
    cout << "\n";
    tree.add(14);
    cout << "\n";
    tree.add(18);
    cout << "\n\n\n";

    cout << tree.root << "\n";

    // tree.inorder();
    // tree.postorder();
    // tree.preorder();
    // cout << "\n#####\n\n";
    // // tree.remove(10);
    // tree.inorder();
    // tree.postorder();
    // tree.preorder();
    // cout << "\n" << tree.heigth(new int(12)) << "\n";
}
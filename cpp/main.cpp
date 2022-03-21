#include "Utils.h"

using std::cin;
using std::cout;
using namespace Caio;

int main(int argc, char **argv)
{
#if defined(__linux__) || defined(__APPLE__)
    system("clear");
#endif
#ifdef _WIN64
    system("cls");
#endif
    // Array<int>::print((new int[4]{1, 5, 9, 8}), 4);
    if (true & true){
        cout << "print\n";
    }
}
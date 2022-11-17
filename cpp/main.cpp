#include "Utils.h"

#include <cstdlib>

using std::cin;
using std::cout;
using namespace Caio;

int C = 0;

int m_idx(int l, int c){
    if(C != 0){
        return (l*C)+c;
    }
    else{
        cout << "matrix has no columns\n";
        return -1;
    }
}

int main(int argc, char **argv)
{
#if defined(__linux__) || defined(__APPLE__)
    system("clear");
#endif
#ifdef _WIN64
    system("cls");
#endif
    // Array<int>::print((new int[4]{1, 5, 9, 8}), 4);
    int l, c;
    l = 8;
    c = 3;
    C = c;

    int v[l*c];

    for (int i = 0; i < l; i++)
    {
        srand(i-1);
        for (int j = 0; j < c; j++)
        {
            // v[m_idx(i, j)] = rand() / 1000000;
            v[m_idx(i, j)] = i+j;
        }
        
    }

    for (int i = 0; i < l; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cout << v[m_idx(i, j)] << " ";
        }
        cout << "\n";
    }
    cout << "\n\n";

    for (int i = 0; i < l*c; i++)
    {
        cout << v[i] << " ";
    }
    cout << "\n";    
}
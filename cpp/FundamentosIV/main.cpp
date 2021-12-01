#include "Functions.h"
#include <tuple>
#include <stdlib.h>
// g++ main.cpp -o main && ./main
using namespace std;

int main(){
    int l, c, i, j;
    freopen("txt.txt", "r", stdin);

    cout << "Digite a quantidade de coeficientes e em seguida a matriz aumentada\n";
    cin >> l;
    c = l + 1;

    float* v = new float[l*c];
    // float* arr = new float[l];

    for(i = 0; i < l; i++){
        for(j = 0; j < c; j++){
            cin >> v[pos(i, j, c)];
        }
    }

    // for(i = 0; i < l; i++){
    //     cin >> arr[i];
    // }

    // float* r = IncreaseMatrix(v, l, --c, arr, l);
    // printMatrix(r, l, ++c);

    pivoting(v, l, c);
    cout << "\n\nMatriz escalonada\n";
    printMatrix(v, l, c, true);

    float* m = new float[l*l];
    float* ti = new float[l];

    std::tie(m, ti) = revertIncreasedMatrix(v, l, c, m, ti);

    cout << "Matriz dos coeficientes\n";
    printMatrix(m, l, c-1, true);
    cout << "Termos independentes\n";
    printArray(ti, l);

    float* r = retroativa(m, ti, l);
    cout << "\nVetor solucao\n";
    printArray(r, l);

    cout << "\nVetor de residuos\n";
    r = applySolution(v, r, l);
    printArray(r, l);

    float erro = abs(r[0]);
    for(i = 1; i < l; i++){
        if(abs(r[i]) > erro){
            erro = abs(r[i]);
        }
    }

    cout << "erro: " << erro << "\n";

    if(erro >= 0.0001){
        cout << "tentando melhorar a solucao";
        refinementSolution(v, l, c, r);

        std::tie(m, ti) = revertIncreasedMatrix(v, l, c, m, ti);

        cout << "Matriz dos coeficientes\n";
        printMatrix(m, l, c-1, true);
        cout << "Termos independentes\n";
        printArray(ti, l);
    }
    
    return 0;  
}
#include "Functions.h"
#include <tuple>
#include <stdlib.h>
// g++ main.cpp -o main && ./main
using namespace std;

int main(){
    int l, c, i, j, cont;
    freopen("txt.txt", "r", stdin);

    cout << "Digite a quantidade de coeficientes e em seguida a matriz aumentada\n";
    cin >> l;
    c = l + 1;

    float* v = new float[l*c];

    for(i = 0; i < l; i++){
        for(j = 0; j < c; j++){
            cin >> v[pos(i, j, c)];
        }
    }
    printMatrix(v, l, c);
    cout << "\n\n";

    float* r = pivoting(v, l, c);
    cout << "\n\nMatriz escalonada\n";
    printMatrix(r, l, c, true);

    // float* m = new float[l*l];
    // float* ti = new float[l];
    float* m = nullptr;
    float* ti = nullptr;

    std::tie(m, ti) = revertIncreasedMatrix(r, l, c);

    cout << "Matriz dos coeficientes\n";
    printMatrix(m, l, c-1, true);
    cout << "Termos independentes\n";
    printArray(ti, l);

    float* ret = retroativa(m, ti, l);
    cout << "\nVetor solucao\n";
    printArray(ret, l);
    cout << "\n";

    float* resq = applySolution(v, ret, l);
    cout << "\nResquicios\n";
    printArray(resq, l);

    float erro(0);
    erro = abs(resq[0]);
    for(i = 1; i < l; i++)
        if(abs(resq[i]) > erro)
            erro = abs(resq[i]);
    cout << "erro: " << erro << "\n";
    
    cont = 0;
    while(erro > 0.0001 and cont < 3){
        cout << "\nwhile -> " << cont << "\n";
        
        applyPortions(v, l, c, resq);
        // cout << "\n\n";
        // printMatrix(v, l, c, true);

        r = pivoting(v, l, c);
        cout << "\n\nMatriz escalonada\n";
        printMatrix(r, l, c, true);

        std::tie(m, ti) = revertIncreasedMatrix(r, l, c);

        cout << "Matriz dos coeficientes\n";
        printMatrix(m, l, c-1, true);
        cout << "Termos independentes\n";
        printArray(ti, l);

        ret = retroativa(m, ti, l);
        cout << "\nVetor solucao\n";
        printArray(ret, l);
        cout << "\n";

        resq = applySolution(v, ret, l);
        cout << "\nResquicios\n";
        printArray(resq, l);

        erro = abs(resq[0]);
        for(i = 1; i < l; i++)
            if(abs(resq[i]) > erro)
                erro = abs(resq[i]);
        cout << "erro: " << erro << "\n";
        
        cont++;
    }
    
    return 0;  
}
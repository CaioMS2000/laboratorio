#include "Functions.h"
#include <tuple>
#include <stdlib.h>
// g++ main.cpp -o main && ./main
using namespace std;

int main(){
    int l, c, i, j, cont(0), limit(10);
    freopen("txt.txt", "r", stdin);

    // cout << "Digite a quantidade de coeficientes e em seguida a matriz aumentada\n";
    cin >> l;
    c = l + 1;

    float* v = new float[l*c];
    float erro(1), precision(0.0001);

    for(i = 0; i < l; i++){
        for(j = 0; j < c; j++){
            cin >> v[pos(i, j, c)];
        }
    }
    
    while(erro >= precision and cont < limit){
        cont++;

        cout << fixed;
        cout << "\n\n===== While #" << cont << " =====\n";
        cout << "Matriz aumentada\n";
        printMatrix(v, l, c);
        cout << "\n";

        float* r = pivoting(v, l, c);
        cout << "\nMatriz escalonada\n";
        printMatrix(r, l, c, true);


        float* m(nullptr);
        float* ti(nullptr);

        std::tie(m, ti) = revertIncreasedMatrix(r, l, c);

        cout << "Matriz dos coeficientes\n";
        printMatrix(m, l, c-1, true);
        cout << "Termos independentes\n";
        printArray(ti, l);

        float* ret = retroativa(m, ti, l);
        cout << "\nVetor solucao\n";
        printArray(ret, l);
        cout << "\n";

        float* b(nullptr);
        float* a(nullptr);

        std::tie(a, b) = revertIncreasedMatrix(v, l, c);

        float* residuo = residue(a, l, ret, b);
        cout << "\nResiduos\n";
        printArray(residuo, l);

        erro = abs(residuo[0]);
        for(i = 1; i < l; i++)
            if(abs(residuo[i]) > erro)
                erro = abs(residuo[i]);
        cout << "erro: " << erro << "\n\n";

        if(erro >= precision){
            ti = copyArray(residuo, l);

            float* aux = (revertIncreasedMatrix(v, l, c)).first;

            v = increaseMatrix(aux, l, c, ti);
        }
    }
    
    return 0;  
}
#include <stdlib.h>
#include <iostream>
#include <stdio.h>
#include <math.h>

using namespace std;

void imprimirMatriz(float**& m, int l, int c);
void imprimirVetor(float*& v, int n);
float** pivoteamento(float**& m, int l, int c);
float* retroativa(float**& m, int l);
float* residuo(float**& m, int l, float*& v);

int main(){
    int l, c, i, j;
    freopen("entrada.txt", "r", stdin);

    cout << "Digite o numero de linhas, o numero de colunas e os valores da matriz aumentada\n";
    cin >> l;
    cin >> c;

    float** v = new float*[l];
    float erro, precisao;
    precisao = 0.0001;
    erro = 1;

    for(i = 0; i < l; i++){
        v[i] = new float[c];
    }

    for(i = 0; i < l; i++){
        for(j = 0; j < c; j++){
            cin >> v[i][j];
        }
    }

    ini:
    cout << fixed;
    cout << "Matriz aumentada\n";
    imprimirMatriz(v, l, c);

    float** r = pivoteamento(v, l, c);
    cout << "\nMatriz escalonada\n";
    imprimirMatriz(r, l, c);

    float* ret = retroativa(r, l);
    cout << "\nVetor solucao\n";
    imprimirVetor(ret, l);

    float* resid = residuo(v, l, ret);
    cout << "\nResiduos\n";
    imprimirVetor(resid, l);

    erro = abs(resid[0]);
    
    for(i = 1; i < l; i++){
        if(abs(resid[i]) > erro){
            erro = abs(resid[i]);
        }
    }
    cout << "erro: " << erro << "\n\n";

    if(erro >= precisao){

        for(i = 0; i < l; i++){
            v[i][l] = resid[i];
        }

        goto ini;
    }
    
    return 0;  
}

void imprimirMatriz(float**& m, int l, int c){
    for (int i = 0; i < l; i++)
    {
        for (int j = 0; j < c; j++)
        {
            cout << m[i][j] << " ";
        }
        cout << "\n";
    }
    
}

void imprimirVetor(float*& v, int n){
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << " ";
    }
    cout << "\n";
}

int zeroOnMainDiagonal(float** v, int n){
    int i, j;

    for(i = 0; i < n; i++){
        if(v[i][i] == 0)
            return i;
    }

    return -1;
}

void switchLines(float** v, int n, int m = 0, int zero = 0){
    int i, target = zero;
    float value = 0;

    for(i = zero+1; i < n; i++){
        if(fabs(v[i][zero]) > value){
            target = i;
            value = fabs(v[i][zero]);
        }
    }

    for(i = 0; i < m; i++){
        float aux = v[zero][i];

        v[zero][i] = v[target][i];
        v[target][i] = aux;
    }
}

float** pivoteamento(float**& m, int l, int c){
    float mult, pivo;
    int check, k, i, j;

    float** res = new float*[l];

    for(i = 0; i < l; i++){
        res[i] = new float[c];
    }

    for(i = 0; i < l; i++)
        for(j = 0; j < c; j++)
            res[i][j] = m[i][j];

    for(k = 0; k < l-1; k++){
        check = zeroOnMainDiagonal(res, l);

        if(check > -1){
            switchLines(res, l, c, check);
        }

        pivo = res[k][k];
        for(i = k+1; i < l; i++){
            mult = res[i][k] / pivo;
            mult *= -1;

            for(j = 0; j < c && mult != 0; j++){
                res[i][j] = res[i][j] + (res[k][j] * mult);
            }
        }
    }

    return res;
}

float* retroativa(float**& m, int l){

    int i, j, ac;
    float *res = new float[l];

    for(i = l-1; i > -1; i--){
        ac = 0;
        for(j = i+1; j < l; j++){
            ac += m[i][j] * res[j];
        }
        res[i] = m[i][l] - ac;
        res[i] /= m[i][i];
    }

    return res;
}

float* residuo(float**& m, int l, float*& v){

    float ac = 0;
    float* res = new float[l];
    int i, j;

    for(i = 0; i < l; i++){
        ac = 0;
        for(j = 0; j < l; j++){
            ac += m[i][j] * v[j];
        }
        res[i] = m[i][l] - ac;
    }

    return res;
}
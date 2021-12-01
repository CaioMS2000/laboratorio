#pragma once
#include <iostream>
#include <sstream>
#include <stdio.h>      /* printf, scanf, puts, NULL */
#include <stdlib.h>     /* srand, rand */
#include <time.h>       /* time */
#include <math.h>
#include <utility>

// generate secret number between 1 and 10:
//   iSecret = rand() % 10 + 1;

int pos(int l, int c, int d){ return l*d+c; }

void printArray(float* v, int n){

    for(int i(0); i < n; i++){
        std::cout << v[i] << " ";
    }

    std::cout << "\n";
}

void printMatrix(float* v, int n, int m = 0, bool doubleDecimal = false){
    m = (m == 0)? n:m;

    for(int i(0); i < n; i++){
        for(int j(0); j < m; j++){
            // std::cout << v[pos(i, j, m)] << " ";
            bool added(false);

            std::ostringstream ss;
            auto number = (doubleDecimal)? floor(v[pos(i, j, m)] * 100) / 100:v[pos(i, j, m)];

            ss << number;
            std::string s = ss.str();

            if(doubleDecimal){
                s = " "+s;
                added = true;
            }

            if(number > -1 && number < 10 && number - int(number) == 0 && !added){
                s = " "+s;
            }


            std::cout << s << " ";
        }
        std::cout << "\n";
    }

    std::cout << "\n";
}

float* retroativa(float *&a, float *&b, int n){
    int i, j, ac;
    float *res = new float[n];

    for(i = n-1; i > -1; i--){
        ac = 0;
        for(j = i+1; j < n; j++){
            ac += a[pos(i, j, n)] * res[j];
        }
        res[i] = b[i] - ac;
        res[i] /= a[pos(i, i, n)];
    }

    return res;
}

float* progressiva(float *&a, float *&b, int n){
    int i, j, ac;
    float *res = new float[n];

    for(i = 0; i < n; i++){
        ac = 0;
        for(j = 0; j <= i-1; j++){
            ac += a[pos(i, j, n)] * res[j];
        }
        res[i] = b[i] - ac;
        res[i] /= a[pos(i, i, n)];
    }

    return res;
}

int zeroOnMainDiagonal(float*& v, int n, int m = 0){
    int i, j;

    for(i = 0; i < n; i++){
        if(v[pos(i, i, m)] == 0)
            return i;
    }

    return -1;
}

void switchLines(float*& v, int n, int m = 0, int zero = 0){
    int i, target = zero;
    float value = 0;

    for(i = zero+1; i < n; i++){
        if(fabs(v[pos(i, zero, m)]) > value){
            target = i;
            value = fabs(v[pos(i, zero, m)]);
        }
    }

    for(i = 0; i < m; i++){
        float aux = v[pos(zero, i, m)];

        v[pos(zero, i, m)] = v[pos(target, i, m)];
        v[pos(target, i, m)] = aux;
    }
}

void pivoting(float* v, int n, int m = 0){
    m = (m == 0)? n:m;
    float mult, pivo;
    int check, k, i, j;

    for(k = 0; k < n-1; k++){
        check = zeroOnMainDiagonal(v, n, m);

        if(check > -1){
            switchLines(v, n, m, check);
            std::cout << "trocou as linhas:\n";
            printMatrix(v, n, m);
        }

        pivo = v[pos(k, k, m)];
        std::cout << "pivo da etapa " << k << ": " << pivo << "\n";
        for(i = k+1; i < n; i++){
            mult = v[pos(i, k, m)] / pivo;
            mult *= -1;

            std::cout << "multiplicador da linha " << i << ": " << mult << "\n";

            for(j = 0; j < m && mult != 0; j++){
                if(j == 0){
                    printf("soma entre as linhas %d e %d\n", i, k);
                }

                printf("somando %.2f com (%.2f * %.2f)\n", v[pos(i, j, m)], v[pos(k, j, m)], mult);
                v[pos(i, j, m)] += v[pos(k, j, m)] * mult;
            }
            std::cout << "\n";
            printMatrix(v, n, m);
        }
    }
}

std::pair<float*, float*> revertIncreasedMatrix(float* a, int l, int c, float* m, float* i){
    for(int k(0); k < l; k++){
        for(int j(0); j < c; j++){
            if(j == c-1){
                i[k] = a[pos(k, j, c)];
            }
            else{
                m[pos(k, j, c-1)] = a[pos(k, j, c)];
            }
        }
    }

    return *(new std::pair<float*, float*>(m, i));
}

float* increaseMatrix(float* a, int l, int c, float* b, int n){
    if (n != l){
        // return nullptr;
        throw std::invalid_argument("o numero de elementos do vetor precisa ser igual ao numero de linhas da matriz");
    }

    float* res = new float[l*(c+1)];
    int i, j;

    for(i = 0; i < l; i++){
        for(j = 0; j < c; j++){
            res[pos(i, j, c+1)] = a[pos(i, j, c)];
        }
        res[pos(i, j, c+1)] = b[i];
    }

    return res;
}

float* applySolution(float* m, float* v, int l){
    float ac = 0;
    float* res = new float[l];
    int i, j;

    for(i = 0; i < l; i++){
        ac = 0;
        for(j = 0; j < l; j++){
            ac += m[pos(i, j, l+1)] * v[j];
        }
        res[i] = m[pos(i, j, l+1)] - ac;
    }

    return res;
}

void refinementSolution (float* m, int l, int c, float* v){
    int i, j;

    for(i = 0; i < l; i++){
        for(j = 0; j < c-1; j++){
            m[pos(i, j, c)] *= v[j];
        }
    }

    pivoting(m, l, c);
}
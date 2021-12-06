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

int zeroOnMainDiagonal(float* v, int n, int m = 0){
    int i, j;

    for(i = 0; i < n; i++){
        if(v[pos(i, i, m)] == 0)
            return i;
    }

    return -1;
}

void switchLines(float* v, int n, int m = 0, int zero = 0){
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

float* pivoting(float*& v, int n, int m){
    float mult, pivo;
    int check, k, i, j;

    float* res = new float[n*m];

    for(i = 0; i < n; i++)
        for(j = 0; j < m; j++)
            res[pos(i, j, m)] = v[pos(i, j, m)];

    for(k = 0; k < n-1; k++){
        check = zeroOnMainDiagonal(res, n, m);

        if(check > -1){
            switchLines(res, n, m, check);
        }

        pivo = res[pos(k, k, m)];
        for(i = k+1; i < n; i++){
            mult = res[pos(i, k, m)] / pivo;
            mult *= -1;

            for(j = 0; j < m && mult != 0; j++){
                res[pos(i, j, m)] = res[pos(i, j, m)] + (res[pos(k, j, m)] * mult);
            }
        }
    }

    return res;
}

std::pair<float*, float*> revertIncreasedMatrix(float*& a, int l, int c){
    float* m = new float[l*l];
    float* i = new float[l];
    
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

float* increaseMatrix(float*& a, int l, int c, float*& b, int n = -1){
    if (n == -1){
        n = l;
    }

    float* res = new float[l*c];
    int i, j;

    for(i = 0; i < l; i++){
        for(j = 0; j < c-1; j++){
            res[pos(i, j, c)] = a[pos(i, j, c-1)];
        }
        res[pos(i, j, c)] = b[i];
    }

    return res;
}

float* residue(float*& a, int l, float*& v, float*& b){
    float ac = 0;
    float* res = new float[l];
    int i, j;


    for(i = 0; i < l; i++){
        ac = 0;
        for(j = 0; j < l; j++){
            ac += a[pos(i, j, l)] * v[j];
        }
        res[i] = b[i] - ac;
    }

    return res;
}

void applyPortions(float*& m, int l, int c, float*& v){
    int i, j;

    for(i = 0; i < l; i++){
        for(j = 0; j < c-1; j++){
            m[pos(i, j, c)] *= v[j];
        }
    }
}

float* copyArray(float*& v, int n){
    float* res = new float[n];

    for(int i(0); i < n; i++)
        res[i] = v[i];
    
    return res;
}
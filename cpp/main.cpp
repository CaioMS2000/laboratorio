#include <iostream>
#include <vector>

using namespace std;

int vivos(vector<bool> &v){
    int cont(0);

    for(int i = 0; i < v.size(); i++){
        if(v[i]){
            cont++;
        }
    }

    return cont;
}

void salto(int &pos, int &k, vector<bool> &v){
    cout << "=======\n";
    cout << "pos: " << pos << " k: " << k << "\n\n";
    /*pos = pos + k;

    if(pos >= v.size()){
        int cont(0);
        pos = -1;

        while(cont < 2){
            pos++;

            if(v[pos])
                cont++;
        }
    }
    else if(!v[pos])
            while(!v[pos] and pos < v.size())
                    pos++;
    */
   int s = 0;

   while(s < k){
       cout << "pos: " << pos << " k: " << k << " s: " << s << "\n";
       s++;
       pos = (pos + 1) % v.size();
   }
    cout << "\n";
   while(!v[pos]){
       pos = (pos + 1) % v.size();
       cout << "pos: " << pos << "\n";
   }

    cout << "terminou na posicao: " << pos << "\n";
   cout << "=======\n";
}

int main() {

    int cont, nc, n, k;
    vector<bool> vivo;
    cin >> nc;
    for(cont = 0; cont < nc; cont++){
        cin >> n >> k;

        for(int i = 0; i < n; i++){
            vivo.push_back(true);
        }

        int pos(-1);
        while(vivos(vivo) > 1){
            //pos = pos + k;
            salto(pos, k, vivo);

            if(!vivo[pos]){
                cout << "vetor na posicao " << pos+1 << " ja esta morto\n";
            }
            else{
                vivo[pos] = false;
                cout << "matei na posicao " << pos+1 << "\n";
                cout << "vivos: " << vivos(vivo) << "\n\n";
            }
        }

        cout << "\n\n";
        for(int i = 0; i < n; i++){
            if(vivo[i]){
                cout << i + 1 << "\n";
            }
        }

        vivo.clear();
    }
}
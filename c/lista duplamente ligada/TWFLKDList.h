#include "Utils.h"

template<class T>
struct Node{
    T content;

    Node<T> *n = NULL;
    Node<T> *p = NULL;
};

template<class T>
struct List{
    Node<T> *first = NULL;
    Node<T> *last = NULL;
    int quantity = 0;

    T get_first(){
        return (*first).content;
    }

    T get_last(){
        return (*last).content;
    }

    void insert(T e){
        if(first == NULL){
            first = last = (Node<T>*)malloc(sizeof(Node<T>));
            (*first).content = e;
        }
        else{
            (*last).n = (Node<T>*)malloc(sizeof(Node<T>));
            (*((*last).n)).p = last;
            last = (*last).n;

            (*last).content = e;
        }
        
        quantity++;
    }    

    bool exists(T e){
        bool answer = false;

        Node<T> *p = first;

        while(p != NULL && !answer){
            if(p->content == e){
                answer = true;
            }

            p = p->n;
        }

        return answer;
    }

    void remove(T e){
        if(quantity > 0){
            int cont = 0;
            Node<T> *p1 = first;
            Node<T> *p2 = NULL;

            while(p1 != NULL){
                cont++;
                p2 = p1;

                if(p1->content == e){

                    (*((*p1).p)).n = p2->n;
                    (*((*p1).n)).p = p2->p;
                }

                p1 = p1->n;
            }

            quantity--;
        }
    }

    void list(){
        if(quantity > 0){
            Node<T> *p = first;
            printf("%d ", p->content);

            p = p->n;
            while(p != NULL){
                printf("%d ", p->content);
                p = p->n;
            }

            printf("\n");
        }
    }
};
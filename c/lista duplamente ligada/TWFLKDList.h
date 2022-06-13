#include "Utils.h"

struct Node{
    char* id;
    char* type;

    struct Node *n = NULL;
    struct Node *p = NULL;

    void print(){
        printf("[%s %s]\n", id, type);
    }
};

struct List{
    struct Node *first = NULL;
    struct Node *last = NULL;
    int quantity = 0;

    struct Node get_first(){
        return (*first);
    }

    struct Node get_last(){
        return (*last);
    }

    void insert(char *i, char *t){
        if(first == NULL){
            first = last = (struct Node*)malloc(sizeof(struct Node));
            (*first).id = i;
            (*first).type = t;
        }
        else{
            (*last).n = (Node*)malloc(sizeof(struct Node));
            (*((*last).n)).p = last;
            last = (*last).n;

            (*first).id = i;
            (*first).type = t;
        }
        
        quantity++;
    }    

    bool exists(char *i, char *t){
        bool answer = false;

        Node *p = first;

        while(p != NULL && !answer){
            if(p->id == i && p->type == t){
                answer = true;
            }

            p = p->n;
        }

        return answer;
    }

    void remove(char *i, char *t){
        if(quantity > 0){
            int cont = 0;
            struct Node *p1 = first;
            struct Node *p2 = NULL;

            while(p1 != NULL){
                cont++;
                p2 = p1;

                if(p1->id == i && p1->type == t){

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
            struct Node *p = first;
            printf("[%s;%s] ", p->id, p->type);

            p = p->n;
            while(p != NULL){
                printf("[%s;%s] ", p->id, p->type);
                p = p->n;
            }

            printf("\n");
        }
    }
};
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    char Reserved[][9] = {"program", "Int", "float", "double", "string", "char", "bool", "If", "for", "while", "goto", "else", "struct", "true", "false"};

	printf("\n#####%d\n", strcmp("3", "2"));
	printf("\n#####%d\n", strcmp("a", "b"));
	printf("\n#####%d\n", strcmp("ac", "ab"));
	printf("\n#####%d\n", strcmp("0", "0"));

	char c = ' ';
	int cont = 0;
	printf("#%d\n", sizeof(char));
	printf("#%d\n", sizeof(Reserved));
	printf("#%d\n", sizeof(Reserved[0]));
	printf("#%d\n", sizeof(Reserved[1]));
	printf("#%d\n", sizeof(Reserved[2]));
	while(c != '\0'){
		c = Reserved[0][cont];
		printf("%c", c);
		cont++;
	}

	printf("#\n%d\n", cont);

    return 0;
}
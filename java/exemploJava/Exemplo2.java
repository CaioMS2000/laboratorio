import java.util.Scanner;

public class Exemplo2 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite um valor inteiro: ");
        int x = teclado.nextInt();
        if (x % 2 == 0 ) {
            System.out.println(x + " é PAR!");
        }
        else {
            System.out.println(x + " é ÍMPAR");
        }
    }
}

package Cliente;
import java.util.Scanner;
import java.net.Socket;
public class Cliente {
    public static void main(String[] args) throws Exception {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite o IP ou Nome de destino: ");
        String ipDestino = teclado.next();
        System.out.println("Digite o número da porta de destino: ");
        int porta = teclado.nextInt();
        //Criar um socket para se conectar   com o IP e porta de destino
        Socket conexao = new Socket(ipDestino, porta);
        System.out.println("Conexão estabelecida com sucesso!");
        
        teclado = new Scanner(System.in);
        System.out.println("Digite uma mensagem: ");
        String mensagem = teclado.nextLine();

        conexao.getOutputStream().write(mensagem.getBytes());
        

    }
}

import java.util.Scanner;
import java.net.Socket;

public class Client {
    public static void main(String[] args) throws Exception{

        System.out.print("\033[H\033[2J");  
	    System.out.flush();

        Scanner teclado = new Scanner(System.in);
        String ipDestino = "0.0.0.0";
        boolean localhost = true;
        boolean executing = true;
        int porta = 2404;

        if(!localhost){
            System.out.println("Digite o IP ou Nome de destino: ");
            ipDestino = teclado.next();

            System.out.println("Digite o número da porta de destino: ");
            porta = teclado.nextInt();
        }

        //Criar um socket para se conectar   com o IP e porta de destino
        Socket conexao = new Socket(ipDestino, porta);
        System.out.println("Conexão estabelecida com sucesso!");

        while(executing){
            teclado = new Scanner(System.in);
            byte[] dados = new byte[2048];
            System.out.println("Digite uma mensagem: ");
            String mensagem = teclado.nextLine();
            
            conexao.getOutputStream().write(mensagem.getBytes());
            
            conexao.getInputStream().read(dados);
            String res = new String(dados);
            
            System.out.println("[FROM SERVER]\n" + res + "\n");
            
        }
    }
}

package Servidor;
import java.util.Scanner;
import java.net.Socket;
import java.net.ServerSocket;

public class Servidor {
    public static void main(String[] args) throws Exception {
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite a porta do serviço: ");
        int porta = teclado.nextInt();
        //Criar um ServerSocket para "escutar" (listen) a porta definida
        ServerSocket server = new ServerSocket(porta);
        //Aguardar alguma conexão de cliente
        System.out.println("Aguardando conexão na porta " + porta);
        Socket conexao = server.accept();
        System.out.println("Cliente conectado");

        byte[] dados = new byte[1024];
        conexao.getInputStream().read(dados);
        System.out.println(new String(dados));
    }
}

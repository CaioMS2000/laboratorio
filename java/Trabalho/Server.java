import java.util.Scanner;
import java.net.Socket;
import java.net.ServerSocket;
import java.util.Random;
import java.nio.ByteBuffer;

public class Server {

    static int byte_To_Int(byte ar[]) {
        ByteBuffer wrapped = ByteBuffer.wrap(ar); // big-endian by default
        short num = wrapped.getShort();     
        ByteBuffer  dbuf = ByteBuffer.allocate(2);//allocates the memory by 2.
        dbuf.putShort(num);
        byte[] bytes = dbuf.array(); 

        System.out.print("\n\n");
        System.out.print(bytes);
        System.out.print("\n\n");

        return bytes[0];
    }

    static int fromByteArray(byte[] bytes) {
        return ((bytes[0] & 0xFF) << 24) | 
               ((bytes[1] & 0xFF) << 16) | 
               ((bytes[2] & 0xFF) << 8 ) | 
               ((bytes[3] & 0xFF) << 0 );
   }
    public static void main(String[] args) throws Exception{

        System.out.print("\033[H\033[2J");  
	    System.out.flush();

        boolean executing = true;
        boolean localhost = true;
        int porta = 2404;
        int random_int = (int)Math.floor(Math.random()*(100-1+1)+1);
        String number = String.valueOf(random_int);
        // System.out.println("The number is: " + number);

        Scanner teclado = new Scanner(System.in);

        if(!localhost){
            System.out.println("Digite a porta do serviço: ");
            porta = teclado.nextInt();
        }

        //Criar um ServerSocket para "escutar" (listen) a porta definida
        ServerSocket server = new ServerSocket(porta);

        //Aguardar alguma conexão de cliente
        System.out.println("Aguardando conexão na porta " + porta);
        Socket conexao = server.accept();
        System.out.println("Cliente conectado: " + conexao.getRemoteSocketAddress());        

        System.out.print("WHILE:\n");
        while(executing){
            byte[] dados = new byte[1024];
            conexao.getInputStream().read(dados);
            String res = new String(dados);

            int res2 = byte_To_Int(dados);
            System.out.print(res2);
            System.out.print("#\n");

            String msg = "I received this message: #" + res + "#";
            
            
            // if(Integer.valueOf(res) == Integer.valueOf(number)){
            //     msg = "It's correct";
            // }
            // else if(Integer.valueOf(res) > Integer.valueOf(number)){
            //     msg = "It's higher";
            // }
            // else{
            //     msg = "It's smaller";
            // }

            conexao.getOutputStream().write(msg.getBytes());
            // System.out.println("-> "+res);
        }
    }
}

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class Cli{
    public static void main(String[] args) throws Exception {
        System.out.print("\033[H\033[2J");  
	    System.out.flush();

        DatagramSocket sck = new DatagramSocket();
        boolean executing = true;
        boolean localhost = true;
        int port = 2404;

        while(executing){

            System.out.print("Type a number\n");
            Scanner kb = new Scanner(System.in);
            String ipt = kb.nextLine();

            byte[] data = ipt.getBytes();

            if(!localhost){
                System.out.println("Digite a porta do serviço: ");
                port = kb.nextInt();
            }

            InetAddress to = InetAddress.getByName("localhost");
            DatagramPacket pck = new DatagramPacket(data, data.length, to, port);
            sck.send(pck);

            byte[] dreceived = new byte[100];
            DatagramPacket preceived = new DatagramPacket(dreceived, dreceived.length);
            sck.receive(preceived);
            String msg = new String(preceived.getData());

            System.out.println("[FROM SERVER]");
            System.out.println(msg);
            System.out.println("\n");

            if("correct".equals(msg.trim())){
                executing = false;
            }
        }

        sck.close();
    }
}
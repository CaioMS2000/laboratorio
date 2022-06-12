import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

public class Svr {
    public static void main(String[] args) throws Exception {
        System.out.print("\033[H\033[2J");  
	    System.out.flush();
        
        boolean executing = true;
        boolean localhost = true;
        int port = 2404;

        Scanner kb = new Scanner(System.in);

        if(!localhost){
            System.out.println("Type a port: ");
            port = kb.nextInt();
        }

        DatagramSocket connection = new DatagramSocket(port);
        System.out.println("Waiting for a connection on " + port);
        int random_int = (int)Math.floor(Math.random()*(100-1+1)+1);
        int cli = 0;

        System.out.println("Answer should be " + random_int);

        while(executing){
            byte[] preceived = new byte[100];
            DatagramPacket pck = new DatagramPacket(preceived, preceived.length);

            connection.receive(pck);
            String txt = new String(pck.getData());
            
            System.out.println(txt);
            cli = Integer.parseInt(txt.trim());

            byte[] send = new byte[100];
            String msg = "";

            if(cli > random_int){
                msg = "smaller";
            }
            else if(cli < random_int){
                msg = "bigger";
            }
            else{
                msg = "correct";
                executing = false;
            }

            send = msg.getBytes();

            InetAddress CIp = pck.getAddress();
            int CP = pck.getPort();
            DatagramPacket psend = new DatagramPacket(send, send.length, CIp, CP);
            connection.send(psend);
        }

        connection.close();
    }
}

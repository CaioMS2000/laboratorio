import java.util.Scanner;

public class test {
    public static void main(String[] args) throws Exception{
        //Scanner teclado = new Scanner(System.in);
        boolean executing = true;
        
        //=== só pra limpar o console ===
        System.out.print("\033[H\033[2J");  
	System.out.flush();
	//===============================

        String val = "31";
        System.out.print(val);
        System.out.print("\n");
        System.out.print(Integer.parseInt(val));
        System.out.print("\n");
        System.out.print(Integer.valueOf(val));
        System.out.print("\n");
    }
}

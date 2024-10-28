import java.util.Objects;
import java.util.Scanner;

public class BanderasConsole {

    public static final String RESET = "\u001B[0m";
    public static final String BLACK = "\u001B[30m";
    public static final String RED = "\u001B[31m";
    public static final String GREEN = "\u001B[32m";
    public static final String YELLOW = "\u001B[33m";
    public static final String BLUE = "\u001B[34m";
    public static final String MAGENTA = "\u001B[35m";
    public static final String CYAN = "\u001B[36m";
    public static final String WHITE = "\u001B[37m";

    public static final String BG_BLACK = "\u001B[40m";
    public static final String BG_RED = "\u001B[41m";
    public static final String BG_GREEN = "\u001B[42m";
    public static final String BG_YELLOW = "\u001B[43m";
    public static final String BG_BLUE = "\u001B[44m";
    public static final String BG_MAGENTA = "\u001B[45m";
    public static final String BG_CYAN = "\u001B[46m";
    public static final String BG_WHITE = "\u001B[47m";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Es horizontal o vertical? (h/v)");
        String direction = scanner.nextLine();
        String [][] bandera = new String[12][9];
        boolean ended = false;

        if(Objects.equals(direction, "h")){
            while (!ended){
                int colAct = 0;
                System.out.println("Afecta a toda la columna? (y/n)");
                String linea = scanner.nextLine();
                System.out.println("Que color (en inglés y mayusculas)");
                String col = scanner.nextLine();
                if(Objects.equals(linea, "y")){
                    for (int i = 0; i < bandera[colAct].length; i++) {
                        bandera[colAct][i] = col;
                    }
                    colAct++;
                    if (colAct > 12){
                        ended = true;
                    }
                }
                //TODO: caso que sea col por col
            }

        }
        else{
            while (!ended){
                int lineaAct = 0;
                System.out.println("Afecta a toda la linea? (y/n)");
                String linea = scanner.nextLine();
                System.out.println("Que color (en inglés y mayusculas)");
                String col = scanner.nextLine();
                if(Objects.equals(linea, "y")){
                    for (int i = 0; i < bandera.length; i++) {
                        bandera[lineaAct][1] = col;
                    }
                    lineaAct++;
                    if (lineaAct > 9){
                        ended = true;
                    }
                }
                //TODO: caso que sea col por col
            }

        }

    }
}

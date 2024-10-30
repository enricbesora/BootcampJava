import java.util.Objects;
import java.util.Scanner;

public class BanderasConsole {

   /*
    public static final String RESET = "\u001B[0m";
    public static final String BLACK = "\u001B[30m";
    public static final String RED = "\u001B[31m";
    public static final String GREEN = "\u001B[32m";
    public static final String YELLOW = "\u001B[33m";
    public static final String BLUE = "\u001B[34m";
    public static final String MAGENTA = "\u001B[35m";
    public static final String CYAN = "\u001B[36m";
    public static final String WHITE = "\u001B[37m";
    */

    public static final String RESET = "\u001B[0m";
    public static final String BLACK = "\u001B[40m";
    public static final String RED = "\u001B[101m";
    public static final String GREEN = "\u001B[102m";
    public static final String YELLOW = "\u001B[103m";
    public static final String BLUE = "\u001B[104m";
    public static final String MAGENTA = "\u001B[105m";
    public static final String CYAN = "\u001B[106m";
    public static final String WHITE = "\u001B[107m";

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escoge modo o bardera (h/v) o (esp/ukr/fr/cat/deu/gre)");
        String answer = scanner.nextLine();
        answer = answer.toLowerCase();
        String [][] bandera = new String[9][18];
        BanderasConsole obj = new BanderasConsole();
        switch (answer){
            case "esp":
                obj.banderaEspaña(bandera);
                break;
            case "ukr":
                obj.banderaUkrania(bandera);
                break;
            case "fr":
                obj.banderaFrancia(bandera);
                break;
            case "cat":
                obj.banderaCatalunya(bandera);
                break;
            case "deu":
                obj.banderaAlemania(bandera);
                break;
            case "gre":
                obj.banderaGrecia(bandera);
                break;
            case "h":
                banderaHorizontal(bandera);
                break;
            case "v":
                banderaVertical(bandera);
                break;
            default:
                System.out.println("Parece que no sabes escribir :o");
                obj.banderaEspaña(bandera);
                break;
        }
        printBandera(bandera);
    }

    public static void banderaHorizontal(String[][] bandera){
        boolean ended = false;
        Scanner scanner = new Scanner(System.in);
        int colAct = 0;
        while (!ended){
            //System.out.println("Afecta a toda la linea? (y/n)");
            //String linea = scanner.nextLine();
            //linea = linea.toLowerCase();
            String linea = "y";
            System.out.println("Que color (en inglés)");
            String col = scanner.nextLine();
            if(Objects.equals(linea, "y")){
                for (int i = 0; i < bandera[colAct].length; i++) {
                    bandera[colAct][i] = col;
                }
                colAct++;
                if (colAct > 8){
                    ended = true;
                }
            }
            //TODO: caso que sea col por col
        }
    }

    public static void banderaVertical(String[][] bandera){
        int lineaAct = 0;
        boolean ended = false;
        Scanner scanner = new Scanner(System.in);
        while (!ended){
            //System.out.println("Afecta a toda la linea? (y/n)");
            //String linea = scanner.nextLine();
            //linea = linea.toLowerCase();
            String linea = "y";
            System.out.println("Que color (en inglés)");
            String col = scanner.nextLine();
            if(Objects.equals(linea, "y")){
                for (int i = 0; i < bandera.length; i++) {
                    bandera[i][lineaAct] = col;
                }
                lineaAct++;
                if (lineaAct > 17){
                    ended = true;
                }
            }
            //TODO: caso que sea col por col
        }
    }

    public static void printBandera(String[][] bandera) {
        for (String[] row : bandera) {
            for (String color : row) {
                if (color != null) {
                    String colorUpper = color.toUpperCase();
                    String colorCode = getColorCode(colorUpper);
                    System.out.print(colorCode + "  " + RESET);
                }
            }
            System.out.println();
        }
    }

    public static String getColorCode(String colorName) {
        switch (colorName) {
            case "BLACK":
                return BLACK;
            case "RED":
                return RED;
            case "GREEN":
                return GREEN;
            case "YELLOW":
                return YELLOW;
            case "BLUE":
                return BLUE;
            case "MAGENTA":
                return MAGENTA;
            case "CYAN":
                return CYAN;
            case "WHITE":
                return WHITE;
            default:
                return RESET;
        }
    }

    public void banderaEspaña(String [][] bandera){
        int colAct =0;
        for (int j = 0; j < 2; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "red";
            }
            colAct++;
        }
        for (int j = 0; j < 5; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "yellow";
            }
            colAct++;
        }
        for (int j = 0; j < 2; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "red";
            }
            colAct++;
        }
    }

    public void banderaGrecia(String[][] bandera) {
        for (int row = 0; row < bandera.length; row++) {
            for (int col = 0; col < bandera[row].length; col++) {
                if (row < 5 && col < 5) {
                    if (row == 2 || col == 2) {
                        bandera[row][col] = "white";
                    } else {
                        bandera[row][col] = "blue";
                    }
                } else {
                    bandera[row][col] = (row % 2 == 0) ? "blue" : "white";
                }
            }
        }
    }

    public void banderaCatalunya(String [][] bandera){
        int colAct =0;
        for (int j = 0; j < 9; j++) {
            int pair = j % 2;
            if(pair == 0){
                for (int i = 0; i < bandera[colAct].length; i++) {
                    bandera[colAct][i] = "yellow";
                }
                colAct++;
            } else{
                for (int i = 0; i < bandera[colAct].length; i++) {
                    bandera[colAct][i] = "red";
                }
                colAct++;
            }
        }
    }

    public void banderaUkrania(String [][] bandera){
        int colAct =0;
        for (int j = 0; j < 4; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "blue";
            }
            colAct++;
        }
        for (int j = 0; j < 5; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "yellow";
            }
            colAct++;
        }
    }

    public void banderaFrancia(String [][] bandera){
        int lineaAct =0;
        for (int j = 0; j < 6; j++) {
            for (int i = 0; i < bandera.length; i++) {
                bandera[i][lineaAct] = "blue";
            }
            lineaAct++;
        }
        for (int j = 0; j < 6; j++) {
            for (int i = 0; i < bandera.length; i++) {
                bandera[i][lineaAct] = "white";
            }
            lineaAct++;
        }
        for (int j = 0; j < 6; j++) {
            for (int i = 0; i < bandera.length; i++) {
                bandera[i][lineaAct] = "red";
            }
            lineaAct++;
        }
    }

    public void banderaAlemania(String [][] bandera){
        int colAct =0;
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "black";
            }
            colAct++;
        }
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "red";
            }
            colAct++;
        }
        for (int j = 0; j < 3; j++) {
            for (int i = 0; i < bandera[colAct].length; i++) {
                bandera[colAct][i] = "yellow";
            }
            colAct++;
        }
    }
}

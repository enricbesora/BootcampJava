import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class TreeConsole {
    public static void main(String[] args) {

        int levels;
        ArrayList<Integer> levelList = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        do {
            System.out.println("Escribe el número de líneas que tendrá el árbol (0 para acabar el bucle):");
            levels = scanner.nextInt();
            if (levels != 0) {
                levelList.add(levels);
            }
        } while (levels != 0);

        System.out.println("Escribe el número de líneas que tendrá el tronco");
        int lineasTronco = scanner.nextInt();

        int maxLevel = Collections.max(levelList);

        for (Integer integer : levelList) {
            levels = integer;
            int levelsAct = 0;

            while (levelsAct != levels) {
                for (int i = 0; i < maxLevel - levelsAct + 4; i++) {
                    System.out.print(" ");
                }
                for (int i = -1; i < levelsAct; i++) {
                    System.out.print("**");
                }
                System.out.println("");
                levelsAct++;
            }
        }


        for (int j = 0; j < lineasTronco; j++) {
            for (int i = 0; i < maxLevel + 3; i++) {
                System.out.print(" ");
            }
            for (int i = 0; i < 2; i++) {
                System.out.print("**");
            }
            System.out.println("");
        }
    }
}

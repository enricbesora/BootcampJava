import java.util.Random;
import java.util.Scanner;

public class Condicionales1 {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(2);

        System.out.println("El numero ha salido: " + randomNumber);
        Scanner scanner = new Scanner(System.in);
        System.out.println("Elige un método para ejecutar (1: methodIf, 2: methodIfElse, 3: methodTern): ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                methodIf(randomNumber);
                break;
            case 2:
                methodIfElse(randomNumber);
                break;
            case 3:
                methodTern(randomNumber);
                break;
            default:
                System.out.println("Opción no válida. Por favor, elige entre 1, 2 o 3.");
        }

        scanner.close();
    }

    public static void methodIf (int num) {
        if(num == 0){
            System.out.println(true + " Rojo");
        }
        if(num == 1){
            System.out.println(false + " Negro");
        }
    }

    public static void methodIfElse (int num) {
        if(num == 0){
            System.out.println(true + " Rojo");
        } else {
            System.out.println(false + " Negro");
        }
    }

    public static void methodTern (int num) {
        System.out.println((num==0)?(true + " Rojo"):(false + " Negro"));
    }
}
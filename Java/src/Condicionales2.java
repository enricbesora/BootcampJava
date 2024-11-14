import java.util.Scanner;

public class Condicionales2 {

    public static void main(String[] args) {
        double temperature = 24.5;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Escribe la temperatura actual");
        temperature = scanner.nextDouble();

        //If and else
        if (temperature < 10) {
            System.out.println("Categoría del clima: Climas fríos");
            if (temperature < 5) {
                System.out.println("Tipo de clima: Polar");
            } else {
                System.out.println("Tipo de clima: Alta montaña");
            }
        } else if (temperature >= 10 && temperature < 20) {
            System.out.println("Categoría del clima: Climas templados");
            if (temperature < 13.5) {
                System.out.println("Tipo de clima: Oceánico");
            } else if (temperature < 16.5) {
                System.out.println("Tipo de clima: Mediterráneo");
            } else {
                System.out.println("Tipo de clima: Continental");
            }
        } else {
            System.out.println("Categoría del clima: Climas cálidos");
            if (temperature >= 20 && temperature < 23.5) {
                System.out.println("Tipo de clima: Ecuatorial");
            } else if (temperature >= 23.5 && temperature < 26.5) {
                System.out.println("Tipo de clima: Tropical");
            } else {
                System.out.println("Tipo de clima: Desértico");
            }
        }


        /**
         * Only if
         *  if (temperature < 10) {
         *             System.out.println("Categoría del clima: Climas fríos");
         *             if (temperature < 5) {
         *                 System.out.println("Tipo de clima: Polar");
         *             }
         *             if (temperature >= 5 && temperature < 10) {
         *                 System.out.println("Tipo de clima: Alta montaña");
         *             }
         *         }
         *
         *         if (temperature >= 10 && temperature < 20) {
         *             System.out.println("Categoría del clima: Climas templados");
         *             if (temperature >= 10 && temperature < 13.5) {
         *                 System.out.println("Tipo de clima: Oceánico");
         *             }
         *             if (temperature >= 13.5 && temperature < 16.5) {
         *                 System.out.println("Tipo de clima: Mediterráneo");
         *             }
         *             if (temperature >= 16.5 && temperature < 20) {
         *                 System.out.println("Tipo de clima: Continental");
         *             }
         *         }
         *
         *         if (temperature >= 20) {
         *             System.out.println("Categoría del clima: Climas cálidos");
         *             if (temperature >= 20 && temperature < 23.5) {
         *                 System.out.println("Tipo de clima: Ecuatorial");
         *             }
         *             if (temperature >= 23.5 && temperature < 26.5) {
         *                 System.out.println("Tipo de clima: Tropical");
         *             }
         *             if (temperature >= 26.5) {
         *                 System.out.println("Tipo de clima: Desértico");
         *             }
         *         }
         */
    }
}

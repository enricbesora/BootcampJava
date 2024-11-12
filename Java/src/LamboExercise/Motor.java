package LamboExercise;

public class Motor extends ComponenteCoche{
    public String tipoMotor;
    public int caballos;
    public int consumoPorKilometro;

    public Motor(String tipoMotor, int caballos, int consumoPorKilometro) {
        this.tipoMotor = tipoMotor;
        this.caballos = caballos;
        this.consumoPorKilometro = consumoPorKilometro;
    }

    public double consumoCombustible(double velocidad, double distancia){

        double factorVelocidad = velocidad / 100.0;
        double factorCaballos = caballos / 100.0;

        double rendimientoReal = consumoPorKilometro - (factorVelocidad + factorCaballos);
        if (rendimientoReal <= 0) rendimientoReal = 1; // para evitar divisiones por 0 o rendimiento negativo

        return (distancia / rendimientoReal); // Consumo en litros
    }


    @Override
    public void MostrarInfo() {
        System.out.println("La marca de este motor es: " + marca);
        System.out.println("El modelo de este motor es: " + modelo);
        System.out.println("El tipo de motor de este motor es: " + tipoMotor);
        System.out.println("Los caballos de este motor son: " + caballos);
        System.out.println("El consumo por kilometro de este motor es: " + consumoPorKilometro);
    }
}

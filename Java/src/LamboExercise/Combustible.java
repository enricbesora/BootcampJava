package LamboExercise;

public class Combustible {
    double gasolina;

    public void repostarCombustible(double aux){
        gasolina += aux;
    }

    public void reducirCombustible(double aux){
        gasolina -= aux;
    }

    public boolean suficienteGasolina(double aux){
        return gasolina >= aux;
    }
}

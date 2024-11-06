package LamboExercise;

public class Coche {

    public String modelo;
    public String color;
    public int puertas;
    public int kilometraje = 0;
    public double velocidad;
    public Motor motor;
    public Rueda ruedas;
    public Combustible combustible;

    public Motor getMotor() {
        return motor;
    }

    public void setMotor(Motor motor) {
        this.motor = motor;
    }

    public Rueda getRuedas() {
        return ruedas;
    }

    public void setRuedas(Rueda ruedas) {
        this.ruedas = ruedas;
    }

    public Combustible getCombustible() {
        return combustible;
    }

    public void setCombustible(Combustible combustible) {
        this.combustible = combustible;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getPuertas() {
        return puertas;
    }

    public void setPuertas(int puertas) {
        this.puertas = puertas;
    }

    public double getVelocidad() {
        return velocidad;
    }

    public void setVelocidad(double velocidad) {
        this.velocidad = velocidad;
    }

    public int getKilometraje() {
        return kilometraje;
    }

    public void setKilometraje(int kilometraje) {
        this.kilometraje = kilometraje;
    }

    public Coche(String modelo, String color, int puertas, double velocidad) {
        this.modelo = modelo;
        this.color = color;
        this.puertas = puertas;
        this.velocidad = velocidad;
    }

    public void acelerarCoche(){
        setVelocidad(velocidad += 33);
    }

    public void frenarCoche(){
        setVelocidad(velocidad -= 33);
    }

    public void recorrerDistancia(){

    }

    public boolean adventerciaCombustible(){
        return true;
    }
}

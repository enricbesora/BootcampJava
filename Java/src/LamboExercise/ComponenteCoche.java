package LamboExercise;

abstract class ComponenteCoche {
    public String modelo;
    public String marca;

    public abstract void MostrarInfo();


    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }


}

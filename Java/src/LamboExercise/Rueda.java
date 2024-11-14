package LamboExercise;

public class Rueda extends ComponenteCoche{

    double grosor;

    public Rueda (int ord){
        switch (ord){
            case 1:
                this.marca = "Bridgestone";
                this.modelo = "Potenza S001";
                this.grosor = 21;
                break;
            case 2:
                this.marca = "Goodyear";
                this.modelo = "Eagle F1 Asymmetric";
                this.grosor = 21;
                break;
            case 3:
                this.marca = "Continental";
                this.modelo = "SportContact 6";
                this.grosor = 21;
                break;
            case 4:
                this.marca = "Pirelli";
                this.modelo = "P Zero Nero";
                this.grosor = 21;
                break;
            default:
                this.marca = "Bridgestone";
                this.modelo = "Potenza S001";
                this.grosor = 21;
                break;
        }
    }

    @Override
    public void MostrarInfo() {
        System.out.println("La marca de esta rueda es: " + marca);
        System.out.println("El modelo de esta rueda es: " + modelo);
        System.out.println("El grosor de esta rueda es: " + grosor);
    }
}

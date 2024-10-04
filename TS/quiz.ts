class Question {
    public questionText: string;
    public options: string[];
    public correctAnswerIndex: number;

    constructor(questionText: string, options: string[], correctAnswerIndex: number) {
        this.questionText = questionText;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    shuffleOptions(): void {
        const correctAnswer = this.options[this.correctAnswerIndex];
        this.options = shuffle(this.options);
        this.correctAnswerIndex = this.options.indexOf(correctAnswer);
    }
}

class Quiz {
    questions: Question[];
    currentQuestionIndex: number;
    score: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex];
    }

    nextQuestion(): void {
        if (this.currentQuestionIndex < numOfQuestionsPerGame) {
            this.currentQuestionIndex++;
        }
    }

    checkAnswer(answerIndex: number): void {
        if (this.getCurrentQuestion().correctAnswerIndex === answerIndex) {
            this.score++;
        }
    }

    hasEnded(): boolean {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

const questions: Question[] = [
    new Question("¿Cuál es la diferencia entre <@link> y <@import> para importar hojas de estilo CSS?", ["<@link> es más eficiente porque permite el paralelismo de carga.", "<@import> permite el paralelismo de carga.", "Ambos son iguales en términos de rendimiento.", "<@import> es recomendado para mejores prácticas."], 0),
    new Question("¿Qué rol juega el atributo 'srcset' en imágenes y cómo afecta el 'viewport'?", ["Permite cargar diferentes imágenes según el tamaño del viewport.", "Cambia el formato de la imagen según el navegador.", "Solo cambia la resolución de la imagen.", "Se utiliza para pre-cargar imágenes."], 0),
    new Question("¿Qué son los 'web components' y cómo se relacionan con la especificación del Shadow DOM?", ["Los web components son parte del HTML 4.", "El Shadow DOM es solo una técnica de JavaScript.", "Los web components son una API para crear elementos reutilizables encapsulados.", "El Shadow DOM no está relacionado con los web components."], 2),
    new Question("¿Qué significa la propiedad 'contain' en CSS y en qué casos es útil?", ["Define cómo el navegador maneja el tamaño de un contenedor.", "Restringe el alcance del rendering y el layout dentro del contenedor.", "Se utiliza para agrupar elementos de contenedores.", "Es un sinónimo de 'overflow'."], 1),
    new Question("¿Qué es un 'BFC' (Block Formatting Context) en CSS y cómo se crea?", ["Es una capa de flexbox que se activa automáticamente.", "Es un área de layout que controla cómo se apilan los bloques.", "Se crea solo con 'position: absolute'.", "Solo se activa en layouts de columnas."], 1),
    new Question("¿Cuál es el propósito de la propiedad 'will-change' en CSS y cuándo debería usarse?", ["Optimiza el rendimiento para futuras animaciones.", "Hace que las transiciones sean más suaves.", "Desactiva las animaciones en dispositivos móviles.", "Afecta la compatibilidad del navegador."], 0),
    new Question("¿Cómo funciona la propiedad 'isolation' en CSS y para qué es útil?", ["Controla cómo se mezcla un elemento con sus elementos hermanos.", "Desactiva la herencia de propiedades CSS.", "Se utiliza para habilitar 'z-index'.", "Define las reglas de accesibilidad."], 0),
    new Question("¿Cómo afectan las pseudo-clases ':nth-of-type' y ':nth-child' de manera diferente el estilo de los elementos?", [ "Ambos funcionan de la misma manera.", ":nth-of-type selecciona elementos de tipo específico dentro de un contenedor.", ":nth-child selecciona todos los hijos de un contenedor, ignorando el tipo.", "Ambos solo afectan a elementos con 'display: block'."], 1),
    new Question("¿Qué es el 'event loop' en JavaScript y cómo gestiona el ciclo de vida de las tareas asíncronas?", ["Es el sistema que ejecuta las tareas en paralelo.", "Es el ciclo que gestiona las llamadas síncronas.", "Es una cola que gestiona tareas síncronas y asíncronas en JavaScript.", "No gestiona las tareas asíncronas."], 2),
    new Question("¿Cuál es la diferencia entre 'call()', 'apply()' y 'bind()' en JavaScript?", ["Los tres son métodos equivalentes.", "'call()' y 'apply()' ejecutan funciones inmediatamente, mientras que 'bind()' retorna una nueva función.", "'call()' pasa argumentos en un array, mientras que 'apply()' los pasa individualmente.", "'bind()' invoca una función directamente."], 1),
    new Question("¿Cómo afecta el uso de 'closures' al manejo de memoria y el alcance de variables en JavaScript?", ["Los closures evitan que las variables sean recolectadas por el garbage collector.", "Los closures duplican variables en el stack.", "Los closures permiten la herencia de variables entre diferentes funciones.", "No afecta el manejo de memoria."], 0),
    new Question("¿Qué es la delegación de eventos en JavaScript y cómo mejora el rendimiento de la aplicación?", ["Es un patrón de diseño donde los eventos se manejan en el contenedor.", "Mejora el rendimiento porque adjunta eventos directamente al DOM.", "Elimina la necesidad de usar listeners en elementos hijos.", "Solo es útil en listas estáticas."], 0),
    new Question("¿Cuál es la diferencia entre 'unknown' y 'any' en TypeScript, y por qué 'unknown' es considerado más seguro?", ["Ambos son equivalentes en TypeScript.", "'unknown' requiere verificación de tipo antes de ser asignado.", "'any' no permite verificaciones de tipo estrictas.", "'unknown' permite la coerción de tipos más fácil que 'any'."], 1),
    new Question("¿Qué son los 'decoradores' en TypeScript y cómo se aplican a clases y métodos?", ["Son funciones que añaden metadatos a clases y métodos.", "Son parte del estándar ECMAScript 2020.", "Solo se aplican a funciones.", "No afectan el comportamiento del código en tiempo de ejecución."], 0),
    new Question("¿Cómo maneja TypeScript las 'utility types' y cuáles son ejemplos comunes de estos tipos?", ["Son tipos que permiten manipular el DOM.", "Incluyen tipos como 'Partial', 'Readonly', y 'Pick' para manipular otros tipos.", "Solo se usan para interfaces.", "No permiten extender las funcionalidades de tipos básicos."], 1),
    new Question("¿Cuál es el propósito de los 'type guards' en TypeScript y cómo mejoran la seguridad del código?", ["Los 'type guards' aseguran que el código no lance errores en tiempo de ejecución.", "Permiten la verificación explícita de tipos durante la ejecución.", "Se usan para definir los tipos en interfaces.", "No tienen efecto en la compilación."], 1)
];


function selectRandomQuestions(questions: Question[], numOfQuestions: number): Question[] {
    return shuffle(questions).slice(0, numOfQuestions);
}

function shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const numOfQuestionsPerGame = 10;
const selectedQuestions = selectRandomQuestions(questions, numOfQuestionsPerGame);
const quiz = new Quiz(selectedQuestions);

function displayQuestion(): void {
    if (quiz.hasEnded()) {
        showScore();
        return;
    }

    const questionContainer = document.getElementById('question-container')!;
    const currentQuestion = quiz.getCurrentQuestion();
    const questionNumber = document.getElementById('question-number')!;

    currentQuestion.shuffleOptions();

    if (currentQuestion) {
        let questionHTML = `<h2>${currentQuestion.questionText}</h2>`;
        currentQuestion.options.forEach((option, index) => {
            questionHTML += `<div class="option" onclick="selectAnswer(${index})">${option}</div>`;
        });

        questionContainer.innerHTML = questionHTML;
        questionNumber.innerHTML = `Question ${quiz.currentQuestionIndex + 1} of ${quiz.questions.length}`;
    }
}

function selectAnswer(answerIndex: number): void {
    const currentQuestion = quiz.getCurrentQuestion();
    const options = document.querySelectorAll('.option');

    quiz.checkAnswer(answerIndex);

    const selectedOption = options[answerIndex];
    if (currentQuestion.correctAnswerIndex === answerIndex) {
        selectedOption.classList.add('correct'); 
    } else {
        selectedOption.classList.add('wrong'); 
        const correctOption = options[currentQuestion.correctAnswerIndex];
        correctOption.classList.add('correct');
    }

    setTimeout(() => {
        options.forEach(option => {
            option.classList.remove('correct', 'wrong');
        });


        if (!quiz.hasEnded()) {
        quiz.nextQuestion();
        }

        if (quiz.hasEnded()) {
            showScore();
        } else {
            displayQuestion();
        }
    }, 1500); 
}

function showScore(): void {
    const scoreContainer = document.getElementById('result-container')!;
    const scoreElement = document.getElementById('score')!;

    scoreElement.innerHTML = `Your score: <strong>${quiz.score}</strong> out of <strong>${quiz.questions.length}</strong>`;
    scoreContainer.style.display = 'block';

    const questionContainer = document.getElementById('question-container')!;
    questionContainer.style.display = 'none';

    const nextButton = document.getElementById('next-button')!;
    nextButton.style.display = 'none';
}

window.onload = () => {
    displayQuestion();
}

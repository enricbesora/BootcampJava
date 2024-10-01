class Question {
    public questionText: string;
    public options: string[];
    public correctAnswerIndex: number;

    constructor(questionText: string, options: string[], correctAnswerIndex: number) {
        this.questionText = questionText;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    // Función para barajar las respuestas manteniendo la correcta
    shuffleOptions(): void {
        const correctAnswer = this.options[this.correctAnswerIndex];
        this.options = shuffle(this.options); // Barajamos las respuestas
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
    new Question("¿Qué significa HTML?", ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Text Mode Language"], 0),
    new Question("¿Qué significa CSS?", ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], 0),
    new Question("¿Cuál de los siguientes es un selector CSS válido?", [".className", "#idName", "element", "Todos los anteriores"], 3),
    new Question("¿Qué hace la propiedad 'position: absolute;' en CSS?", ["Posiciona el elemento de forma relativa", "Posiciona el elemento de forma absoluta con respecto al viewport", "Posiciona el elemento con respecto al elemento contenedor más cercano", "No cambia la posición del elemento"], 2),
    new Question("¿Qué propiedad CSS cambia el color del texto?", ["color", "background-color", "text-color", "font-color"], 0),
    new Question("¿Qué etiqueta HTML se utiliza para enlazar archivos CSS externos?", ["link", "style", "script", "css"], 0),
    new Question("¿Qué significa JS?", ["JavaScript", "JScript", "JavaServer", "None of the above"], 0),
    new Question("¿Qué método se usa para seleccionar un elemento por su ID en JavaScript?", ["document.getElementById()", "document.querySelector()", "document.getElementsByClassName()", "document.getElementsByTagName()"], 0),
    new Question("¿Qué palabra clave se utiliza para declarar una constante en JavaScript?", ["let", "var", "const", "define"], 2),
    new Question("¿Cuál es el operador de igualdad estricta en JavaScript?", ["==", "===", "!=", "=!="], 1),
    new Question("¿Qué significa 'NaN' en JavaScript?", ["Null and None", "Not a Number", "Number and Null", "None at Null"], 1),
    new Question("¿Cuál de los siguientes NO es un tipo de datos en JavaScript?", ["Boolean", "Number", "Character", "Undefined"], 2),
    new Question("¿Cómo se declara una función en TypeScript?", ["function myFunction(){}", "function: myFunction{}", "function = myFunction{}", "func myFunction(){}"], 0),
    new Question("¿Qué es TypeScript?", ["Un superconjunto tipado de JavaScript", "Un reemplazo de JavaScript", "Un framework de JavaScript", "Una extensión para HTML"], 0),
    new Question("¿Cuál es la principal característica de TypeScript?", ["Ofrece tipado estático", "Es más rápido que JavaScript", "Funciona sin transpilador", "Se ejecuta solo en servidores"], 0),
    new Question("¿Cómo se define una interfaz en TypeScript?", ["interface MyInterface {}", "class MyInterface {}", "function MyInterface {}", "type MyInterface {}"], 0)
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

const numOfQuestionsPerGame = 5;
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

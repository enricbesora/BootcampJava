document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const nextJokeButton = document.getElementById('next-joke');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            jokeElement.textContent = data.value;
        } catch (error) {
            jokeElement.textContent = 'Error al cargar el chiste.';
        }
    };

    nextJokeButton.addEventListener('click', fetchJoke);

    // Cargar el primer chiste al inicio
    fetchJoke();
});

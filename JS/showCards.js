let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");

card1.addEventListener("mouseover", () => {
    card1.querySelector('.card-inner').classList.add('flipped');
});

card1.addEventListener("mouseleave", () => {
    card1.querySelector('.card-inner').classList.remove('flipped');
});

card2.addEventListener("mouseover", () => {
    card2.querySelector('.card-inner').classList.add('flipped');
});

card2.addEventListener("mouseleave", () => {
    card2.querySelector('.card-inner').classList.remove('flipped');
});

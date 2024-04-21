let menu = document.querySelector('.hamburger-menu')
let bar = document.getElementById('menu')
let close = document.getElementById('cross')

bar.addEventListener('click', () => {
    menu.style.display = 'block'
})
close.addEventListener('click', () => {
    menu.style.display = 'none'
})

const answers = [
    "So I always have a friend close",
    "To give as a gift",
    "To decorate my house!",
    "To reduce stress",
    "Grow my own garden"
]

let currentIndex = 0;

function generateNextAnswer() {
    const answerElement = document.getElementById('answer');
    answerElement.textContent = answers[currentIndex];
    currentIndex = (currentIndex + 1) % answers.length;
}

document.getElementById('generateButton').addEventListener('click', generateNextAnswer);

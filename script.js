const textEl = document.getElementById('typing');
const speedEl = document.getElementById('speed');

const text = 'I am loving it, you should try that too ;)';

let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 1;
    }
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});

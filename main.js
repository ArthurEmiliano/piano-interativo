const whiteKeysClass = document.querySelectorAll(".whiteKey");
const blackKeysClass = document.querySelectorAll(".blackKey");

const notes = [
    "./notes/whiteKeys/0.mp3",
    "./notes/whiteKeys/1.mp3",
    "./notes/whiteKeys/2.mp3",
    "./notes/whiteKeys/3.mp3",
    "./notes/whiteKeys/4.mp3",
    "./notes/whiteKeys/5.mp3",
    "./notes/whiteKeys/6.mp3",
    "./notes/whiteKeys/7.mp3",
    "./notes/whiteKeys/8.mp3",
    "./notes/whiteKeys/9.mp3",
    "./notes/blackKeys/0.mp3",
    "./notes/blackKeys/1.mp3",
    "./notes/blackKeys/2.mp3",
    "./notes/blackKeys/3.mp3",
    "./notes/blackKeys/4.mp3",
    "./notes/blackKeys/5.mp3",
    "./notes/blackKeys/6.mp3",
    "./notes/blackKeys/7.mp3",
    "./notes/blackKeys/8.mp3",
    "./notes/blackKeys/9.mp3",
];

const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "2",
    "3",
    "5",
    "6",
    "7",
    "9",
    "0",
];

blackKeysClass.forEach((black, index) => {
    black.addEventListener("click", () => {
        const sound = new Audio(`./notes/blackKeys/${index}.mp3`);
        playSound(sound);
    });
});

whiteKeysClass.forEach((white, index) => {
    white.addEventListener("click", () => {
        const sound = new Audio(notes[index]);
        playSound(sound);
    });
});

function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const index = keys.indexOf(key);

    if (index !== -1) {
        event.preventDefault();
        const sound = new Audio(notes[index]);
        playSound(sound);
        const keyElement = document.getElementById(index + 1);
        keyElement.classList.add("active");
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    const index = keys.indexOf(key);

    if (index !== -1) {
        const keyElement = document.getElementById(index + 1);
        keyElement.classList.remove("active");
    }
});

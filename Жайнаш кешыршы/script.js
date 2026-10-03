const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const success = document.getElementById("success");

// Кнопка "Да"
yesButton.addEventListener("click", function () {
    success.classList.remove("hidden");

    document.querySelector("h1").textContent = "Спасибо ❤️";

    document.querySelector("p").innerHTML =
        "Я очень ценю тебя 🥹<br>" +
        "Больше не буду тебя расстраивать ❤️";

    yesButton.style.display = "none";
    noButton.style.display = "none";
});

// Кнопка "Нет" убегает
function moveNoButton() {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 150 - 75;

    noButton.style.transform = "translate(" + x + "px, " + y + "px)";
}

// Наведение мышкой
noButton.addEventListener("mouseover", function () {
    moveNoButton();
});

// Нажатие на телефоне
noButton.addEventListener("click", function () {
    moveNoButton();
});
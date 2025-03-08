document.getElementById("startButton").addEventListener("click", function() {
    // Исчезновение кнопки
    this.style.display = "none";

    // Запуск анимации цветка
    let flower = document.getElementById("flower");
    flower.style.display = "block";
    flower.classList.add("animate");

    // Прячем текст перед анимацией
    let message = document.getElementById("message");
    message.style.opacity = "0";
    message.style.transform = "scale(0.5)";

    // Обход блокировки вибрации (срабатывает после клика)
    setTimeout(() => {
        if (navigator.vibrate) {
            navigator.vibrate([500, 300, 500, 300]); // Два коротких толчка с паузами
        }
    }, 100); // Минимальная задержка, чтобы браузер принял действие

    // Показываем текст через 4 секунды
    setTimeout(() => {
        message.classList.add("animate-text");
    }, 4000);
});

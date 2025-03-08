document.getElementById("startButton").addEventListener("click", function() {
    // Исчезновение кнопки
    this.style.display = "none";

    // Запуск анимации цветка
    let flower = document.getElementById("flower");
    flower.style.display = "block"; // Показываем SVG
    flower.classList.add("animate"); // Добавляем класс анимации

    // Прячем текст перед началом анимации
    let message = document.getElementById("message");
    message.style.opacity = "0";
    message.style.transform = "scale(0.5)"; // Скрываем текст

    // Обход блокировки вибрации (срабатывает после клика)
    requestAnimationFrame(() => {
        if (navigator.vibrate) {
            navigator.vibrate([3000, 500, 1000]); // Вибрация на время анимации
        }
    });

    // Показываем текст через 4 секунды (после завершения анимации цветка)
    setTimeout(() => {
        message.classList.add("animate-text"); // Добавляем анимацию текста
    }, 4000);
});
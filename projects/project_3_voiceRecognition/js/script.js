window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

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
        })

    if(event.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
})

recognition.addEventListener('end', recognition.start);
recognition.start();
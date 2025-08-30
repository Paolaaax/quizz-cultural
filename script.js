function checkAnswers() {
    var correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'b'
    };

    var userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    var score = 0;
    for (var key in correctAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    alert('Você acertou ' + score + ' de 5 perguntas!');
}

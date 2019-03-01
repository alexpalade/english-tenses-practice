let verbs = [
    ['walk', 'walked', 'walked'],
    ['write', 'wrote', 'written']
]
let currentVerb = 0;
let status = 'asking';

function reveal() {
    let answerPresentElem = document.getElementById('answerPresent');
    let answerPastElem = document.getElementById('answerPast');
    let answerPerfectElem = document.getElementById('answerPerfect');

    answerPresentElem.textContent = verbs[currentVerb][0];
    answerPastElem.textContent = verbs[currentVerb][1];
    answerPerfectElem.textContent = verbs[currentVerb][2];
}

function ask() {
    let questionElem = document.getElementById('question');
    questionElem.textContent = verbs[currentVerb][0];
}

function resetAnswer() {
    let answerPresentElem = document.getElementById('answerPresent');
    let answerPastElem = document.getElementById('answerPast');
    let answerPerfectElem = document.getElementById('answerPerfect');
    answerPresentElem.textContent = '';
    answerPastElem.textContent = '';
    answerPerfectElem.textContent = '';
}

function buttonClicked() {
    let btn = document.getElementById('reveal');
    if (status === 'asking') {
        reveal();
        btn.textContent = 'Next';
        currentVerb = (currentVerb+1)%verbs.length;
        status = 'revealing';
    } else {
        ask();
        resetAnswer();
        btn.textContent = 'Show';
        status = 'asking'
    }
}


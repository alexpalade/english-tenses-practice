let verbs = [
    ['walk', 'walked'],
    ['write', 'wrote'],
    ['sleep', 'slept'],
    ['read', 'read'],
    ['swim', 'swam'],
];

let currentVerb = 0;
let status = 'asking';

function reveal() {
    let answerPastElem = document.getElementById('answerPast');
    answerPastElem.textContent = verbs[currentVerb][1];
}

function ask() {
    let questionElem = document.getElementById('question');
    questionElem.textContent = verbs[currentVerb][0];
}

function resetAnswer() {
    let answerPastElem = document.getElementById('answerPast');
    answerPastElem.textContent = '...';
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


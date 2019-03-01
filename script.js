let verbs = [
    ['walk', 'walked'],
    ['write', 'wrote'],
    ['sleep', 'slept'],
    ['read', 'read'],
    ['swim', 'swam'],
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(verbs);

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


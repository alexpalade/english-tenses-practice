let verbs = [
    ['walk', 'walked', false],
    ['write', 'wrote', false],
    ['sleep', 'slept', false],
    ['read', 'read', false],
    ['swim', 'swam', false],
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

function showProgress() {
    let progressElem = document.getElementById('progress');
    progressElem.innerHTML = '';
    verbs.forEach(function(item, position) {
        let progressDot = document.createElement('span');
        progressDot.className = 'dot';
        if (currentVerb === position && status === 'asking') {
            progressDot.classList.add('active');
        } else {
            if (item[2] === false) {
                progressDot.classList.add('gray');
            } else {
                progressDot.classList.add('green');
            }
        }
        progressElem.appendChild(progressDot);
    });
}

function buttonClicked() {
    let btn = document.getElementById('reveal');
    if (status === 'asking') {
        reveal();
        btn.textContent = 'Next';
        verbs[currentVerb][2] = true;
        currentVerb = (currentVerb+1)%verbs.length;
        status = 'revealing';
    } else {
        ask();
        resetAnswer();
        btn.textContent = 'Show';
        status = 'asking'
    }
    showProgress();
}

showProgress();


const questions = [
    {
        question: 'Ile to jest 2 + 2 * 2?',
        responseA: {
            response: '4',
            selected: false,
            correct: false
        },
        responseB: {
            response: '6',
            selected: false,
            correct: true
        },
        responseC: {
            response: '8',
            selected: false,
            correct: false
        }
    },
    {
        question: 'Którzy z tych bohaterów są z Uniwersum Marvela?',
        responseA: {
            response: 'Spider-Man',
            selected: false,
            correct: true
        },
        responseB: {
            response: 'Batman',
            selected: false,
            correct: false
        },
        responseC: {
            response: 'Daredevil',
            selected: false,
            correct: true
        }
    },
    {
        question: 'Które z tych rzek płyną przez Polskę?',
        responseA: {
            response: 'Dunaj',
            selected: false,
            correct: false
        },
        responseB: {
            response: 'Wisła',
            selected: false,
            correct: true
        },
        responseC: {
            response: 'Dunajec',
            selected: false,
            correct: true
        }
    }
]

window.index = 0;

function startQuiz() {
    const startButton = document.getElementById('buttonStart')
    startButton.remove();

    const main = document.getElementById('main');

    main.innerHTML += `
        <div id="timeContainer">
            <div id="timer">
                <div id="timerBar"></div>
            </div>
        </div>
        
    `

    startTimer();

    main.innerHTML += `
  <div id="quizContainer">
        <div class="quizCard">
            <p id="question">${questions[window.index].question}</p>
            <div class="responsesContainer">
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseA" onchange="onChangeInput(this.id)">
                    <label for="responseA">${questions[window.index].responseA.response}</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseB" onchange="onChangeInput(this.id)">
                    <label for="responseB">${questions[window.index].responseB.response}</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseC" onchange="onChangeInput(this.id)">
                    <label for="responseC">${questions[window.index].responseC.response}</label>
                </div>
            </div>
        </div>
        <div class="quizButtons">
            <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
        </div>
    </div>
  `
}

function startTimer() {
    let width = 600;
    let interval = setInterval(timer, 20);


    function timer() {
        if(width <= 0) {
            document.getElementById("timer").style.backgroundColor = "red";
            endQuiz();
            clearInterval(interval);
        } else {
        width--;
        document.getElementById("timerBar").style.width = width + "px";
        }
    }
}

function getNextQuestion() {
    const main = document.getElementById("main");
    let quizContainer = document.getElementById("quizContainer");
    quizContainer.remove();
    window.index += 1;

    main.innerHTML += `
    <div id="quizContainer">
          <div class="quizCard">
              <p id="question">${questions[window.index].question}</p>
              <div class="responsesContainer">
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseA" onchange="onChangeInput(this.id)">
                      <label for="responseA">${questions[window.index].responseA.response}</label>
                  </div>
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseB" onchange="onChangeInput(this.id)">
                      <label for="responseB">${questions[window.index].responseB.response}</label>
                  </div>
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseC" onchange="onChangeInput(this.id)">
                      <label for="responseC">${questions[window.index].responseC.response}</label>
                  </div>
              </div>
          </div>
      </div>
    `

    quizContainer = document.getElementById("quizContainer");
    if (window.index === questions.length - 1) {
        quizContainer.innerHTML += `
             <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
             </div>
             <button type="button" class="button" onclick="endQuiz()">Koniec</button>
        `
    } else {
        quizContainer.innerHTML += `
             <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
             </div>
        `
    }


}

function getPreviousQuestion() {
    const main = document.getElementById("main");
    let quizContainer = document.getElementById("quizContainer");
    quizContainer.remove();
    window.index -= 1;

    main.innerHTML += `
    <div id="quizContainer">
          <div class="quizCard">
              <p id="question">${questions[window.index].question}</p>
              <div class="responsesContainer">
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseA" onchange="onChangeInput(this.id)">
                      <label for="responseA">${questions[window.index].responseA.response}</label>
                  </div>
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseB" onchange="onChangeInput(this.id)">
                      <label for="responseB">${questions[window.index].responseB.response}</label>
                  </div>
                  <div class="response">
                      <input type="checkbox" class="responseInput" id="responseC" onchange="onChangeInput(this.id)">
                      <label for="responseC">${questions[window.index].responseC.response}</label>
                  </div>
              </div>
          </div>
      </div>
    `

    quizContainer = document.getElementById("quizContainer");
    if (window.index === 0) {
        quizContainer.innerHTML += `
             <div class="quizButtons">
             <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
             </div>
        `
    } else {
        quizContainer.innerHTML += `
             <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
             </div>
        `
    }


}

function onChangeInput(checkbox) {
    const question = questions[window.index];
    if (document.getElementById(checkbox).checked === true) {
        question[checkbox].selected = true;
    } else {
        question[checkbox].selected = false;
    }

    console.log('questions: ', questions);

}

function endQuiz() {
    const main = document.getElementById("main");
    let quizContainer = document.getElementById("quizContainer");
    quizContainer.remove();
    let correctAnswears = 0;

    for (let i = 0; i < questions.length; i++) {
        const correctAnswear = 
        questions[i].responseA.selected === questions[i].responseA.correct && 
        questions[i].responseB.selected === questions[i].responseB.correct && 
        questions[i].responseC.selected === questions[i].responseC.correct;

        if(correctAnswear) {
            correctAnswears++;
        }

        const borderClass = correctAnswear ? 'correctAnswear' : 'wrongAnswear';

        main.innerHTML += `
  <div id="quizContainer">
        <div class="quizCard ${borderClass}">
            <p id="question">${questions[i].question}</p>
            <div class="responsesContainer">
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseA" onchange="onChangeInput(this.id)" disabled>
                    <label for="responseA">${questions[i].responseA.response}</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseB" onchange="onChangeInput(this.id)" disabled>
                    <label for="responseB">${questions[i].responseB.response}</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseC" onchange="onChangeInput(this.id)" disabled>
                    <label for="responseC">${questions[i].responseC.response}</label>
                </div>
            </div>
        </div>
    </div>
  `

    }

    let gifSrc = '';
    if(correctAnswears === 3) {
        gifSrc = 'images/welldone.gif';
    } else if(correctAnswears === 2) {
        gifSrc = 'images/quitegood.gif';
    } else {
        gifSrc = 'images/bad.gif';
    }

    main.innerHTML += `
        <div id="endQuizContainer">
            <p>Zdobyłeś/Zdobyłaś ${correctAnswears}/${questions.length} punktów! <p>
            <img src=${gifSrc}>
        </div>

    `
}

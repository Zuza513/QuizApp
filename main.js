function startQuiz() {
  const startButton = document.getElementById('buttonStart')
  startButton.remove();

  const main = document.getElementById('main');

  main.innerHTML += `
  <div id="quizContainer">
        <div class="quizCard">
            <p id="question">Pytanie???</p>
            <div class="responsesContainer">
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseA" onchange="onChangeInput(this.id)">
                    <label for="responseA">Odpowiedź A</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseB" onchange="onChangeInput(this.id)">
                    <label for="responseA">Odpowiedź B</label>
                </div>
                <div class="response">
                    <input type="checkbox" class="responseInput" id="responseC" onchange="onChangeInput(this.id)">
                    <label for="responseA">Odpowiedź C</label>
                </div>
            </div>
        </div>
        <div class="quizButtons">
            <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
            <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
        </div>
    </div>
  `
}

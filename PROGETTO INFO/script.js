// Risposte corrette per ogni domanda (true = "Vero" è giusto, false = "Falso" è giusto)
const correctAnswers = [
  true,   // 1 Obbligo: diritto
  true,   // 2 Obbligo: catene
  true,   // 3 Pericolo: curva
  false,   // 4 Pericolo: cunetta
  false,  // 5 Semaforo rosso
  true,   // 6 vigile ALT
  true,   // 7 Divieto di sosta
  false,   // 8 Divieto di transito
  true,   // 9 Dare precedenza
  true,   // 10 Stop
  false,  // 11 INCROCIO TOA
  false    // 12 INCROCIO HDBL
];

let score = 0;
let answered = 0;

// Funzione che controlla la risposta
function checkAnswer(button, questionIndex, userAnswer) {
  const buttons = button.parentElement.querySelectorAll("button");

  // Evita doppi clic
  if (buttons[0].disabled) return;

  buttons.forEach(btn => btn.disabled = true);

  if (userAnswer === correctAnswers[questionIndex]) {
    score++;
    button.style.backgroundColor = "#28a745";
  } else {
    button.style.backgroundColor = "#dc3545";
  }

  answered++;
}

// Mostra il punteggio finale
function showScore() {
  if (answered < 12) {
    alert("Completa tutte le domande prima di vedere il punteggio.");
    return;
  }
  const passText = score >= 11 ? "✅ Hai superato il quiz!" : "❌ Non hai superato il quiz.";
  document.getElementById("result").textContent = `Hai ottenuto ${score} su 12 risposte corrette! \n${passText}`;
}

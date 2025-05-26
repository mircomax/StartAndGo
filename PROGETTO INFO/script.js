// risposte corrette per ogni domanda (true = "vero" è giusto, false = "falso" è giusto)
const correctAnswers = [
  true,   // 1 obbligo: diritto
  true,   // 2 obbligo: catene
  true,   // 3 pericolo: curva
  true,  // 4 pericolo: cunetta
  true,  // 5 semaforo rosso
  true,   // 6 vigile ALT
  true,   // 7 divieto di sosta
  true,  // 8 divieto di transito
  true,   // 9 dare precedenza
  true,   // 10 stop
  true,  // 11 incrocio TOA
  true   // 12 incrocio HDBL
];

let score = 0;      // tiene traccia del punteggio dell'utente
let answered = 0;   // conta quante domande sono già state risposte

// funzione che controlla la risposta dell'utente
function checkAnswer(button, questionIndex, userAnswer) {
  // ottiene tutti i bottoni della domanda corrente
  const buttons = button.parentElement.querySelectorAll("button");

  // evita che si possa rispondere più volte alla stessa domanda
  if (buttons[0].disabled) return;

  // disabilita tutti i bottoni della domanda dopo la risposta
  buttons.forEach(btn => btn.disabled = true);

  // controlla se la risposta è corretta
  if (userAnswer === correctAnswers[questionIndex]) {
    score++; // incrementa il punteggio se corretto
    button.style.backgroundColor = "#28a745"; // verde per risposta corretta
  } else {
    button.style.backgroundColor = "#dc3545"; // rosso per risposta sbagliata
  }

  answered++; // incrementa il numero di domande risposte
}

// mostra il punteggio finale all'utente
function showScore() {
  // controlla che tutte le domande siano state risposte
  if (answered < 12) {
    alert("Completa tutte le domande prima di vedere il punteggio.");
    return;
  }
  // messaggio di superamento o meno del quiz
  if (score >= 11) {
    // Mostra il pop-up del certificato
    document.getElementById("certModal").style.display = "block";
  } else {
    alert("Test non superato. Puoi riprovare!");
  }
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

let score = 0;      // tiene traccia del punteggio dell'utente
let answered = 0;   // conta quante domande sono già state risposte

// funzione che controlla la risposta dell'utente
function checkAnswer(button, userAnswer) {
  // ottiene tutti i bottoni della domanda corrente
  const buttons = button.parentElement.querySelectorAll("button");

  // evita che si possa rispondere più volte alla stessa domanda
  if (buttons[0].disabled) return;

  // disabilita tutti i bottoni della domanda dopo la risposta
  buttons.forEach(btn => btn.disabled = true);

  // controlla se la risposta è corretta
  if (userAnswer) {
    score++; // incrementa il punteggio se corretto
    button.style.backgroundColor = "#28a745"; // verde per risposta corretta
  } else {
    button.style.backgroundColor = "#dc3545"; // rosso per risposta sbagliata
  }

  answered++; // incrementa il numero di domande risposte
}

// mostra il punteggio finale all'utente
function showScore() {
  const resultText = `Hai ottenuto ${score} su 12 risposte corrette.`;
  
  if (answered < 12) {
    alert("Completa tutte le domande prima di vedere il punteggio.");
    return;
  }

  let passText = ""; // definizione fuori dal blocco
  if (score >= 11) {
    passText = "✅ Hai superato il quiz!";
    document.getElementById("certModal").style.display = "block"; //visualizza il modal per il certificato
  } else {
    passText = "❌ Non hai superato il quiz.";
    alert(document.getElementById("result").textContent = `${resultText} ${passText}`); // mostra il risultato in un alert
  }
  // mostra il risultato finale nella pagina sotto al bottone
  document.getElementById("result").textContent = `${resultText} ${passText}`;
}


function closeModal() {
  document.getElementById("certModal").style.display = "none";
}

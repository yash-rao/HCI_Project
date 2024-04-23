// Caesar Cipher Quiz Submission Function
function submitCaesarQuiz() {
    const answer1 = document.querySelector('input[name="caesar-q1"]:checked');
    const answer2 = document.querySelector('input[name="caesar-q2"]:checked');
const answer3 = document.querySelector('input[name="caesar-q3"]:checked');
const answer4 = document.querySelector('input[name="caesar-q4"]:checked');
const answer5 = document.querySelector('input[name="caesar-q5"]:checked');
const answer6 = document.querySelector('input[name="caesar-q6"]:checked');
const answer7 = document.querySelector('input[name="caesar-q7"]:checked');
const answer8 = document.querySelector('input[name="caesar-q8"]:checked');
const answer9 = document.querySelector('input[name="caesar-q9"]:checked');
const answer10 = document.querySelector('input[name="caesar-q10"]:checked');

 

    let score = 0;
    let answerText = "";

    if (answer1 && answer1.value === "a") {
        score++;
    } else {
        answerText += "Q1: Substitution Cipher (Correct answer: a)\n<br>";
    }
    if (answer2 && answer2.value === "c") {
        score++;
    } else {
        answerText += "Q2: Shifting the alphabet by 3 places (Correct answer: c)\n<br>";
    }
    if (answer3 && answer3.value === "b") {
        score++;
    } else {
        answerText += "Q3: Decryption (Correct Answer: b)\n<br>";
    }
    if (answer4 && answer4.value === "a") {
        score++;
    } else {
        answerText += "Q4: Julius Caesar (Correct answer: a)\n<br>";
    }
    if (answer5 && answer5.value === "b") {
        score++;
    } else {
        answerText += "Q5: 26 (Correct answer: b)\n<br>";
    }
    if (answer6 && answer6.value === "a") {
        score++;
    } else {
        answerText += "Q6: No encryption (Correct answer: a)\n<br>";
    }
    if (answer7 && answer7.value === "a") {
        score++;
    } else {
        answerText += "Q7: Symmetric Encryption (Correct answer: a)\n<br>";
    }
    if (answer8 && answer8.value === "b") {
        score++;
    } else {
        answerText += "Q8: -5 (Correct answer: b)\n<br>";
    }
    if (answer9 && answer9.value === "a") {
        score++;
    } else {
        answerText += "Q9: Z (Correct answer: a)\n<br>";
    }
    if (answer10 && answer10.value === "a") {
        score++;
    } else {
        answerText += "Q10: It's equivalent to a key of 0  (Correct answer: a)\n<br>";
    }

    const quizResults = document.getElementById('caesar-quiz-results');
    quizResults.innerHTML = `You scored ${score} out of 10.`;
    if (score < 10) {
        quizResults.innerHTML += `<br>Incorrect answers:<br>${answerText}`;
    }
    else if(score ==10) {
	quizResults.innerHTML = "Congratulations you passed";
	}
}

// Monoalphabetic Cipher Quiz Submission Function
function submitMonoalphabeticQuiz() {
const answer1 = document.querySelector('input[name="monoalphabetic-q1"]:checked');
const answer2 = document.querySelector('input[name="monoalphabetic-q2"]:checked');
const answer3 = document.querySelector('input[name="monoalphabetic-q3"]:checked');
const answer4 = document.querySelector('input[name="monoalphabetic-q4"]:checked');
const answer5 = document.querySelector('input[name="monoalphabetic-q5"]:checked');
const answer6 = document.querySelector('input[name="monoalphabetic-q6"]:checked');
const answer7 = document.querySelector('input[name="monoalphabetic-q7"]:checked');
const answer8 = document.querySelector('input[name="monoalphabetic-q8"]:checked');
const answer9 = document.querySelector('input[name="monoalphabetic-q9"]:checked');
const answer10 = document.querySelector('input[name="monoalphabetic-q10"]:checked');

    let score = 0;
    let answerText = "";

    if (answer1 && answer1.value === "a") {
        score++;
    } else {
        answerText += "Q1: Substitution Cipher (Correct answer: a)\n<br>";
    }
    if (answer2 && answer2.value === "c") {
        score++;
    } else {
        answerText += "Q2: Mapped to a unique letter in the ciphertext (Correct answer: c)\n<br>";
    }
    if (answer3 && answer3.value === "a") {
        score++;
    } else {
        answerText += "Q3: Vulnerable to frequency analysis (Correct Answer: a)\n<br>";
    }
    if (answer4 && answer4.value === "c") {
        score++;
    } else {
        answerText += "Q4: Factorial of 26 (26!) (Correct answer: c)\n<br>";
    }
    if (answer5 && answer5.value === "a") {
        score++;
    } else {
        answerText += "Q5: Substitution table (Correct answer: a)\n<br>";
    }
    if (answer6 && answer6.value === "b") {
        score++;
    } else {
        answerText += "Q6: It will have the same encryption as the first occurrence (Correct answer: b)\n<br>";
    }
    if (answer7 && answer7.value === "c") {
        score++;
    } else {
        answerText += "Q7: Atbash Cipher (Correct answer: c)\n<br>";
    }
    if (answer8 && answer8.value === "a") {
        score++;
    } else {
        answerText += "Q8: Simple Substitution Cipher(Correct answer: a)\n<br>";
    }
    if (answer9 && answer9.value === "b") {
        score++;
    } else {
        answerText += "Q9: Randomizing the key (Correct answer: b)\n<br>";
    }
    if (answer10 && answer10.value === "c") {
        score++;
    } else {
        answerText += "Q10: Easy implementation and understanding  (Correct answer: c)\n<br>";
    }


    const quizResults = document.getElementById('monoalphabetic-quiz-results');
    quizResults.innerHTML = `You scored ${score} out of 10.`;
    if (score < 10) {
        quizResults.innerHTML += `<br>Incorrect answers:<br>${answerText}`;
    }
}


// Caesar Cipher Encryption Function
function caesarEncrypt() {
    const plaintext = document.getElementById('caesar-plaintext').value.toUpperCase();
    const shift = parseInt(document.getElementById('caesar-shift').value);
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + shift) % 26) + 65;
        }
        ciphertext += String.fromCharCode(charCode);
    }

    document.getElementById('caesar-ciphertext').innerText = ciphertext;
}

// Caesar Cipher Decryption Function
// Caesar Cipher Decryption Function
// Caesar Cipher Decryption Function
function caesarDecrypt() {
    const ciphertext = document.getElementById('caesar-plaintext').value.toUpperCase();
    const shift = parseInt(document.getElementById('caesar-shift').value);
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);
        // Decrypt uppercase letters
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - shift + 26) % 26) + 65;
        }
        plaintext += String.fromCharCode(charCode);
    }

    document.getElementById('caesar-ciphertext').innerText = plaintext;
}




// Monoalphabetic Cipher Encryption Function
// Monoalphabetic Cipher Encryption Function
function monoalphabeticEncrypt() {
    const plaintext = document.getElementById('monoalphabetic-plaintext').value.toUpperCase();
    const key = document.getElementById('monoalphabetic-key').value.toUpperCase();
    let ciphertext = '';

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            let index = charCode - 65;
            ciphertext += key[index % key.length];
        } else {
            ciphertext += plaintext[i];
        }
    }

    document.getElementById('monoalphabetic-ciphertext').innerText = ciphertext;
}

// Monoalphabetic Cipher Decryption Function
function monoalphabeticDecrypt() {
    const ciphertext = document.getElementById('monoalphabetic-plaintext').value.toUpperCase();
    const key = document.getElementById('monoalphabetic-key').value.toUpperCase();
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];
        let index = key.indexOf(char);
        if (index !== -1) {
            plaintext += String.fromCharCode(index + 65);
        } else {
            plaintext += char;
        }
    }

    document.getElementById('monoalphabetic-ciphertext').innerText = ciphertext;
}


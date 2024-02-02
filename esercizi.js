//1- Funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.
function checkNumber (a, b) {
    if (a === 50 || b === 50|| a + b === 50) {
        return true;
    } else {
        return false;
    }
}

/*2- Funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la 
posizione come parametri e ritorna la stringa modificata.*/
function modifyString (string, [index]) {
    if (typeof string === string) {
        let newString = string.replace(string.at([index]), "");
        return newString;
    } else {
        return "Non hai inserito una stringa!"
    }
}

/*3- Funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano
queste condizioni, altrimenti "false"*/
function includedNumber (a, b){
    if (((40 < a && a < 60) || (70 < a && a < 100)) && ((40 < b && b < 60) || (70 < b && b < 100))) {
        return true;
    } else {
        return false;
    }
}

/*4- Funzione che accetta un nome di città come parametro e ritorna il nome stesso se inizia con "Los" o "New",
altrimenti ritorni "false" */
function cityMatch (string) {
    if ((string.startsWith("Los") || string.startsWith("New"))) {
        return string;
    } else {
        return false;
    }
}

//5- Funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro */
function addArray (array) {
    let sum = 0; 
    for ( let i = 0; i < array.length; i++ ) {
        sum += array[i];
    }
    return sum;
}

//6- Funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna "true" altrimenrti "false.
function findNum (array) {
    if (array.includes(1) || array.includes(3)) {
        return false;
    } else {
        return true;
    }
}

/*7 - Funzione per trovare il tipo di angolo i cui gradi sono passati come parametro. VEDI */
function cornerType (deg) {
   if (deg < 90) {
    return "acuto";
   } else if (deg > 90 && deg < 180) {
    return "ottuso";
   } else if (deg === 90) {
    return "retto";
   } else if (deg === 180) {
    return "piatto"
   } else {
    return "Non conosco il tuo angolo"
   }
}

/*8- Funzione che crei acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" deve ritornare FIAT */
function acronym (string) {
    if (typeof string === "string") {
        let words = string.split(" ");
        let firstLetter = [];
        for (el of words) {
            let firstOf = el[0];
            firstLetter.push(firstOf);
                       
        }
        return firstLetter.join("").toUpperCase();
    } else {
        return "Non hai inserito una stringa!"
    } 
}
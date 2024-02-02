//1- Partendo da una stringa (parametro) ritorna il carattere più usato nella stringa stessa.
function letterRecurrence (string) {
    let letters = string.split("");
    let counter = {};
    let maxLetter = "";
    let maxCount = 0;
    
    for(let i = 0; i < letters.length; i++) {
        let letter = letters[i];
        counter[letter] = (counter[letter] || 0) + 1;
        if(counter[letter] > maxCount) {
            maxCount = counter[letter];
            maxLetter = letter;
        }
    }
    return maxLetter;
}

/*2- Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, 
ritorna `true`, altrimenti ritorna `false`.*/ 
function isAnagram (string1, string2) {
    let firstWord = string1.toLowerCase();
    let secondWord = string2.toLowerCase();
    firstWord = firstWord.replace(/[^\w]|_/g, "").split("").sort().join("");
    secondWord= secondWord.replace(/[^\w]|_/g, "").split("").sort().join("");
    if (firstWord === secondWord) {
        return true;
    } else {
        return false;
    }
}

/*3- Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array 
contenente tutti gli anagrammi corretti della parola data.*/
function wichAnagram (string, array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (isAnagram(string, array[i])) { //richiamo la funzione dell'es.2
            result.push(array[i]);
        }
    }
    return result
}

//4- Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
function palindrome (string) {
    let stringToAnalize = string.toLowerCase();
    let stringToCompare = stringToAnalize.split("").reverse().join("");
    if (stringToCompare === stringToAnalize) {
        return true;
    } else {
        return false;
    }
}

//5- Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario.
function reverseNumber (x) {
    let reverse = x.toString().split("").reverse().join("");
    return reverse;
}

/*6 - Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” 
creata con il carattere “#” e avente X scalini.*/
function hashtagStairs (y) {
    for (let i = 1; i <= y; i++) {
        console.log("#".repeat(i))
    }
    return "";
}

//7- Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario.
function reverse (string) {
    let rev = string.split("").reverse().join("");
    return rev 
}

//8 - Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
function arraySplit (array, z) {
    let subArray = []; 
    for (el of array) {
        let arrB = array.splice(el[0], z);
        if (arrB.length > 0) {
            subArray.push(arrB);
        }
    } 
    return subArray
}

/*9- Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console
una “piramide” creata con il carattere “#” e avente X strati.*/
function extraNine(x) {
    let char = "#";
    console.log(char);
    for (let i = 0; i < x-1; i++) {
            char += "##";
        console.log(char);
    }
}
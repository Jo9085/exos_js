sentence = prompt ("Qu'est ce que tu me veux ?")

capital = sentence.toUpperCase();
words = sentence.split(' ')

/*console.log(capital);
console.log(words);*/

function has_fortnite(text) {
    for(count=0; count< text.length; count++){
        if (text[count] === "Fortnite" || text[count] === "fortnite") {
            return true
        }
    }
}


if (sentence[sentence.length-1] === '?') {
    console.log("Ouais ouais...")
}
else if (capital === sentence && sentence != '') {
    console.log("Pwa, calme-toi...")
}
else if (has_fortnite(words)){
    console.log("on s' fait une partie soum-soum ?")
}
else if (sentence === '') {
    console.log("t'es en PLS ?")
}
else {
    console.log("balek")
}

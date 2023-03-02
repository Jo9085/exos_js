let number = prompt ("De quel nombre veux tu calculer la factorielle ?");

let sum = 1
for(let count = 1;  count <= number; count++) {
    sum = sum * count
}

console.log(`Le résultat est ${sum}`)



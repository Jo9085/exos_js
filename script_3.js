let number = prompt("Combien d'étages veux tu pour ta pyramide ?");

let space = " ";
let diese = "X";

for (count = 1; count <= number; count++) {
    console.log(space.repeat(number-count) + diese.repeat(count))
}
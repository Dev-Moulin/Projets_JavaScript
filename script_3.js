let nombreEtages = prompt("hey! tu veut que je te dessine un mout.. une piramide? tu veux combien d'étage?");


for (let i = 1; i <= nombreEtages; i++) {
  let espaces = " ".repeat(nombreEtages - i);

  let blocs = "#".repeat(i);

  console.log(espaces + blocs); } 
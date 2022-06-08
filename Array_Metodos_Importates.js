const pilotos = ["Vettel", "Alonso", "Massa", "barriquelo"];
pilotos.pop(); //retira o elemento da ultima posição(pop)
console.log(pilotos);

pilotos.push("Vestapen"); //adiciona na ultima posição(push)
console.log(pilotos);

pilotos.shift(); // Remove o Primeiro(shift)
console.log(pilotos);

pilotos.unshift("Hamilton"); //adiciona na primeira posição(unshift)
console.log(pilotos);

// splice pode adicionar ou remover elementos

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
pilotos.splice(3, 1); //Massa quebrou de novo
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo Array(pega uma parte do Array)
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);

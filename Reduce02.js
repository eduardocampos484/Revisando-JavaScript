const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.9, bolsista: true },
];

// desafio 1: todos os alunos são bolsistas
const todosBolsistas = (Resultado, bolsista) => Resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// desafio 2: Agum aluno bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));

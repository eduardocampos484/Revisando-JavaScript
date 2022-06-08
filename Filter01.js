const produtos = [
  { nome: "notebook", preco: 2599, fragil: true },
  { nome: "iPad", preco: 4199, fragil: true },
  { nome: "copo de vidro", preco: 25.99, fragil: true },
  { nome: "copo de plastico", preco: 18.99, fragil: true },
];

console.log(
  produtos.filter(function (p) {
    return false;
  })
);

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

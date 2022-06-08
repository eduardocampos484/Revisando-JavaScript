Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

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

console.log(produtos.filter2(caro).filter2(fragil));

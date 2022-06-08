Arry.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "borracha", "preco": 3.45 }',
  '{ "nome": "caderno", "preco": 13.50 }',
  '{ "nome": "Kit de lapis", "preco": 45.20 }',
];

//retornar o array apenas com preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);

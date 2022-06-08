const carrinho = [
  '{ "nome": "borracha", "preco": 3.45 }',
  '{ "nome": "caderno", "preco": 13.50 }',
  '{ "nome": "Kit de lapis", "preco": 45.20 }',
];

//retornar o array apenas com preços

const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

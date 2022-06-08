const pessoa = {
  saudacao: "bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas

const falardepessoa = pessoa.falar.bind(pessoa);
falardepessoa();

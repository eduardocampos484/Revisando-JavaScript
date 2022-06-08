function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }, 5000); // milésimo de segundos
}

new Pessoa();

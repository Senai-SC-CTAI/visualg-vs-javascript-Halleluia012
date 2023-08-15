function barEbath(publico) {
    const banheiroPessoa = 1 / 50;
    const barPessoa = 1 / 150;
    const QBanheiros = Math.ceil(publico * banheiroPessoa);
    const QBares = Math.ceil(publico * barPessoa);
    return { QBanheiros, QBares };
  }
  
  function calcular() {
    const publico = parseInt(document.getElementById("publico").value);
    const resultado = barEbath(publico);
    document.getElementById("resultadoBanheiros").textContent = `Banheiros: ${resultado.QBanheiros}`;
    document.getElementById("resultadoBares").textContent = `Bares: ${resultado.QBares}`;
  }
  
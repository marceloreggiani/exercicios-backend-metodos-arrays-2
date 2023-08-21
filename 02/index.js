const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const existePalavraInvalida = palavras.some(function (valor) {
    return valor.length > 5;
});
if (existePalavraInvalida) {
    console.log("Existe Palavra Invalida");
} else {
    console.log("Array Validado");
};
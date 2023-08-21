const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesEncontrados = nomes.filter((nome) => {
    return nome.slice(0, 1).toLowerCase() === 'a';
});

console.log(nomesEncontrados);
const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const cidadesFiltradas = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

const arrayFormatado = cidadesFiltradas.join(', ');

console.log(cidadesFiltradas);
console.log(arrayFormatado);


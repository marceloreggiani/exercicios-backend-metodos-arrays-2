function buscarEndereco(cep) {
    const enderecos = [
        { cep: 10111222, rua: "Rua dos Artistas" },
        { cep: 20111333, rua: "Rua Augusta" },
        { cep: 30222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ]
    const enderecosEncontrados = enderecos.find((enderecos) => {
        return enderecos.cep === cep;
    });
    console.log(enderecosEncontrados.rua);
}
buscarEndereco(10111222);

const statusLogado = (nome) => {
    return `${nome} logou com sucesso`;
}

const usuarioLogin = (nome) => {
    return statusLogado(nome);
}

const login = usuarioLogin("Ivirson");
console.log(login);
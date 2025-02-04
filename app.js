let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let addAmigo = input.value.trim(); //usamos trim() para evitar que um usuário adicione apenas espaços como nome

    if (addAmigo === '') {
        alert('Por favor, insira um nome válido!')
    }else{
        amigos.push(addAmigo);
        input.value = ''; // Limpa o campo de entrada
        exibirAmigos(); // Atualiza a lista na tela
    }
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório entre 0 e o tamanho do array - 1
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome do amigo sorteado

    document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}





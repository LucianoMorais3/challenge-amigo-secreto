let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let addAmigo = input.value.trim(); 

    if (addAmigo === '') {
        alert('Por favor, insira um nome válido!')
    }else{
        amigos.push(addAmigo);
        input.value = ''; 
        exibirAmigos(); 
    }
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

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

    let indiceSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceSorteado]; 

    document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}





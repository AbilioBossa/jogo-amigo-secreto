//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');  
    const nome = input.value.trim();
    if (nome !== '') {  
        amigos.push(nome);
        input.value = '';  
        atualizarLista();
    } else {
        alert('Por favor, digite um nome válido!');  
    }
}

function atualizarLista() {
    const listaNomes = document.getElementById('listaAmigos');
    listaNomes.innerHTML = '<strong>Nomes adicionados:</strong> ' + (amigos.length > 0 ? amigos.join(', ') : 'Nenhum nome adicionado ainda.');  // Corrigido: Usar 'listaNomes' em vez de 'listaAmigos'
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length === 0) {  
        resultado.innerHTML = 'Nenhum nome para sortear! Adicione um nome primeiro.';
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    resultado.innerHTML = `Nome sorteado: ${amigos[indiceAleatorio]}`;  
}
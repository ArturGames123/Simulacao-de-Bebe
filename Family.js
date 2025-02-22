// Função para criar o bebê
function criarBebe(tipo) {
    let bebe = {
        tipo: tipo,
        urina: '', // Urina
        cocô: '', // Fezes
        fraldas: '⬜', // Fralda limpa
        chorando: '', // Se o bebê está chorando (emoji de choro ou raiva)
        tempoVida: 0, // Tempo de vida do bebê
        crescer: false // Se o bebê vai crescer
    };

    // Se for um bebê normal, ele vai crescer
    if (tipo === 'normal') {
        bebe.crescer = true;
    }

    return bebe;
}

// Função para o bebê urinar e chorar, ficar com raiva ou ficar normal
function urinar(bebe) {
    if (bebe.urina == '') {
        // O bebê começa a urinar
        bebe.urina = '💧'; // Xixi
        bebe.fraldas = '🟨'; // Fralda com xixi

        // Escolher aleatoriamente a reação do bebê
        let sorteio = Math.random();
        if (sorteio < 0.3) {
            bebe.chorando = '😭'; // 30% de chance de chorar
        } else if (sorteio < 0.5) {
            bebe.chorando = '😡'; // 20% de chance de ficar com raiva
        } else {
            bebe.chorando = ''; // 50% de chance de ficar normal (sem reação)
        }

        // Atualiza a reação do bebê na tela
        atualizarReacao(bebe);
    }
}

// Função para o bebê fazer cocô e chorar, ficar com raiva ou ficar normal
function defecar(bebe) {
    if (bebe.cocô == '') {
        // O bebê faz cocô
        bebe.cocô = '💩'; // Fezes
        bebe.fraldas = '🟫'; // Fralda com cocô

        // Escolher aleatoriamente a reação do bebê
        let sorteio = Math.random();
        if (sorteio < 0.3) {
            bebe.chorando = '😭'; // 30% de chance de chorar
        } else if (sorteio < 0.5) {
            bebe.chorando = '😡'; // 20% de chance de ficar com raiva
        } else {
            bebe.chorando = ''; // 50% de chance de ficar normal (sem reação)
        }

        // Atualiza a reação do bebê na tela
        atualizarReacao(bebe);
    }
}

// Função para trocar a fralda do bebê
function trocarFralda(bebe) {
    // Limpa a fralda do bebê
    bebe.fraldas = '⬜'; // Fralda limpa
    bebe.urina = ''; // Limpa a urina
    bebe.cocô = ''; // Limpa o cocô
    bebe.chorando = ''; // O bebê para de chorar

    // Atualiza a reação na tela
    atualizarReacao(bebe);
}

// Função para atualizar a tela com a reação do bebê
function atualizarReacao(bebe) {
    const fraldaElemento = document.getElementById('fralda1');
    const reacaoElemento = document.getElementById('reacao1');
    fraldaElemento.textContent = 'Fralda: ' + bebe.fraldas; // Atualiza a fralda do bebê
    reacaoElemento.textContent = 'Reação: ' + (bebe.chorando || 'Normal'); // Atualiza o emoji de choro, raiva ou normal
}

// Inicializa um bebê normal
const bebe1 = criarBebe('normal');

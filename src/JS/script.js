alert("Bem-vindo(a) a Vinheria Agnello!")

function Vinho(nome, tipo, safra, estoque) {
    this.nome = nome;
    this.tipo = tipo;
    this.safra = safra;
    this.estoque = estoque;
}

const listaVinhos = []

const vinho1 = new Vinho("Líquido dos Deuses", "Tinto", 2022, 7);
listaVinhos.push(vinho1);
const vinho2 = new Vinho("Rosa Vermelha", "Rosê", 2017, 4);
listaVinhos.push(vinho2);
const vinho3 = new Vinho("Cristalino", "Branco", 2015, 3);
listaVinhos.push(vinho3);

function estoqueBaixo(vinho) {
    return vinho.estoque < 5;
}

function adicionarVinho() {
    const nome = prompt("Qual o nome do vinho?");
    const tipo = prompt("Qual o tipo do vinho?");
    const safra = parseInt(prompt("Qual a safra do vinho?"));
    const estoque = parseInt(prompt(`Quantos ${nome} têm no estoque?`));

    const novoVinho = new Vinho(nome, tipo, safra, estoque);
    listaVinhos.push(novoVinho);
    alert(`Novo vinho ${novoVinho.nome} cadastrado com sucesso!`);
    let outroVinho = prompt('Quer adicionar mais um vinho? (Digite "sim" ou "não")');
    while (outroVinho != "sim" && outroVinho != "não") {
        alert('Digite apenas "sim" ou "não"!');
        outroVinho = prompt('Quer adicionar mais um vinho? (Digite "sim" ou "não")');
    }
    if (outroVinho == "não") {
        alert("Obrigado! Todas as informações dos vinhos cadastrados estão no console!");
        mostrarDados();
    }
    if (outroVinho == "sim") {
        adicionarVinho();
    }
}

function mostrarDados() {
    console.log("======= Lista de Vinhos =======");
    listaVinhos.forEach(vinho => {
        console.log(`Nome do vinho: ${vinho.nome}\nTipo: ${vinho.tipo}\nSafra: ${vinho.safra}\nEstoque: ${vinho.estoque}`);
        if (estoqueBaixo(vinho)) {
            console.log(`O estoque do vinho ${vinho.nome} está baixo!`);
        }
    });

    const vinhosFilter = listaVinhos.filter(estoqueBaixo);
    console.log("\n======= Vinhos com Estoque Baixo =======");
    vinhosFilter.forEach(vinho => {
        console.log(`${vinho.nome} - Estoque: ${vinho.estoque}`);
    })

    const estoqueTotal = listaVinhos.reduce((total, vinho) => total + vinho.estoque, 0);
    console.log(`\n======= Total do Estoque =======\nTotal de Garrafas: ${estoqueTotal}`);

    const nomesVinhos = listaVinhos.map(vinho => vinho.nome.toUpperCase());
    console.log("\n======= Nomes dos Vinhos =======");
    nomesVinhos.forEach(nome => console.log(nome));
}
adicionarVinho();
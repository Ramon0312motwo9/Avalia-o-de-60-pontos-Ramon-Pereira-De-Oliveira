class Produto {
    nome;
    marca;
    preco;

    adicionar(nome, marca, preco) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        console.log("O produto foi adicionado ao estoque.")
    }
}

loja = new Produto();

loja.adicionar("Gabinite gamer com led", "Pichau", 370.99)

loja2 = new Produto();

loja2.adicionar("Monitor gamer AOC Hero 144hz", "AOC", 1450.99)

loja3 = new Produto();

loja3.adicionar("Mouse gamer com led", "Red Dragon", 430.00)

console.log(loja, loja2, loja3)
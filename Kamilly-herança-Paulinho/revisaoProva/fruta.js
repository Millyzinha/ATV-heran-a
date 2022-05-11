class Fruta{
    #nome
    #preco

    constructor(nome, preco){
        this.#nome = nome
        this.#preco = preco
    }

    set nome (nome){this.#nome = nome}
    get nome(){return this.#nome}
    set preco (preco){this.#preco = preco}
    get preco(){return this.#preco}

    toString(){return "Nome da Fruta: " +  this.#nome + ", Preço: " + this.#preco}
}
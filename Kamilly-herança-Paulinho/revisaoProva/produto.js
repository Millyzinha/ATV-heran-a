class Produto{
    #nome
    #qnt
    #precoU
    #total

    constructor(nome, qnt, precoU, total){
        this.#nome = nome
        this.#qnt = qnt
        this.#precoU = precoU
        this.#total = total
    }

    set nome (nome){this.#nome = nome}
    get nome(){return this.#nome}
    set qnt (qnt){this.#qnt = qnt}
    get qnt(){return this.#qnt}
    set precoU (precoU){this.#precoU = precoU}
    get precoU(){return this.#precoU}
    set total (total){this.#total = total}
    get total(){return this.#total}

    toString(){return "Produto: " +  this.#nome + ", Quantidade: " + this.#qnt + ", Preço: " + this.#precoU + ", Total: " + this.#total}

}

let produtos = []
for(let i = 0; i < 10; i++){
    produtos.push(new Produto("Arroz de festa" + i, i+1, i* 2, 0))
}
console.log(produtos.toString())
console.log(produtos.map(p =>{
    p.total = p.qnt * p.precoU
    return[p.nome, p.qnt, p.precoU, p.total]
}))
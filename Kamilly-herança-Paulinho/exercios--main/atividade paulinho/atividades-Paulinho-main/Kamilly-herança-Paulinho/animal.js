class Animal{
    #nome
    constructor(nome){
        this.#nome = nome
    }

    set nome(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

    getFalar(){
        return "Animal fala"
    }

    toString(){
        return "Nome: " + this.#nome
    }
}

class Gato extends Animal{
    #raca
    constructor(nome, raca){
        super(nome), this.#raca = raca
    }
    set raca(raca){
        this.#raca = raca
    }

    get raca(){
        return this.#raca
    }

    getFalar(){
        return "Gato mia"
    }

    toString(){
        return super.toString() + ", Raça: " + this.#raca
    }
}

class Papagaio extends Animal{
    #idade
    constructor(nome, idade){
        super(nome), this.#idade = idade
    }
    set idade(idade){
        this.#idade = idade
    }

    get idade(){
        return this.#idade
    }

    getFalar(){
        return "Qualquer coisa"
    }

    toString(){
        return super.toString() + ", Idade: " + this.#idade
    }
}


class Cachorro extends Animal{
    #raca
    constructor(nome, raca){
        super(nome), this.#raca = raca
    }

    set raca(raca){
        this.#raca = raca
    }

    get raca(){
        return this.#raca
    }

    getFalar(){
        return "Cão late"
    }

    toString(){
        return super.toString() + ", Raça: " + this.#raca
    }

    
}

// let animal = new Animal("Baleia")
// console.log(animal.toString())
// let gato = new Gato("Oliver", "Bengal")
// console.log(gato.toString())
// let cachorro = new Cachorro("Billy", "buldogue-inglês")
// console.log(cachorro.toString())
// console.log(animal.getFalar(), gato.getFalar(), cachorro.getFalar())

const listAnimais = () => {
    let p = document.getElementById('resultado')
    let animal = new Animal("Baleia")
    let gato = new Gato("Oliver", "Bengal")
    let cachorro = new Cachorro("Billy", "buldogue-inglês")
    let papagaio = new Papagaio("Jon", "70")
    p.innerHTML = "<b>"+ animal.toString() + "<b><br>" +
    "<b>"+ gato.toString() + "<b><br>" +
    "<b>"+ cachorro.toString() + "<b><br>" +
    "<b>"+ papagaio.toString() + "<b><br>"
   
}

listAnimais()
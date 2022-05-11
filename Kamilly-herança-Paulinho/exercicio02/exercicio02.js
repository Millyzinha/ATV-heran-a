class Pessoa{
    #nome
    #cpf
    constructor(nome, cpf){
        this.#nome = nome
        this.#cpf = cpf
    }

    set nome(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

}
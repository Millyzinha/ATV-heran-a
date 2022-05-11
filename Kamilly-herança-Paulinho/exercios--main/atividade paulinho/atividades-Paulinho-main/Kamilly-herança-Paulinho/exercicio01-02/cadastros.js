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

    set cpf(cpf){
        this.#cpf = cpf
    }

    get cpf(){
        return this.#cpf
    }

    toString(){
        return "Nome: " + this.#nome + ", Número CPF: " + this.#cpf
    }

}

class Cliente extends Pessoa{
   #numeroCelular
    constructor(numeroCelular, nome, cpf){
        super(nome, cpf), this.#numeroCelular = numeroCelular


    }
    set numeroCelular(numeroCelular){
        this.#numeroCelular = numeroCelular
    }

    get numeroCelular(){
        return this.#numeroCelular
    }

    toString(){
        return super.toString() + ", Número de Celular : " + this.#numeroCelular
    }

}

class Funcionario extends Pessoa{
    #dataNascimento
     constructor(dataNascimento, nome, cpf){
         super(nome, cpf), this.#dataNascimento = dataNascimento
 
 
     }
     set dataNascimento(dataNascimento){
         this.#dataNascimento = dataNascimento
     }

     get dataNascimento(){
         return this.#dataNascimento
     }

     toString(){
        return super.toString() + ", Data de Nascimento: " + this.#dataNascimento
    }

 }

 let cliente1 = new Cliente("(48) 98460 9761", "Carol", "875.986.123-65")
 console.log(cliente1.toString())
 let cliente2 = new Funcionario("12/09/2000", "Renato", "259.314.598-10")
 console.log(cliente2.toString())



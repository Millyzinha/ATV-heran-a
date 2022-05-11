class Pessoa{
    #nome

    constructor(nome){       
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

    set nome(nome){
        this.#nome = nome
    }

    toString(){
        return "Meu nome é: " + this.#nome
    }
}

class Estudante extends Pessoa{
    #nota1
    #nota2
    #media

    constructor(nome, nota1, nota2){
        super(nome)
        this.#nota1 = nota1
        this.#nota2 = nota2
    }

    set nota1(nota1){
        this.#nota1 = nota1
    }

    get nota1(){
        return this.#nota1
    }

    set nota2(nota2){
        this.#nota2 = nota2
    }

    get nota2(){
        return this.#nota2
    }

    get media(){
        return this.#media
    }

    calcularMedia(){
        this.#media = (this.#nota1 + this.#nota2) /2
    }

    toString(){
        return super.toString() + ". Eu tenho as Notas: [" + this.#nota1 + ", " + this.#nota2 + "] Com a Média: " + this.#media 
    }

}

class Professor extends Pessoa{
    #horasT
    #valor
    #salario

    constructor(nome, horasT, quant){
        super(nome)
        this.#horasT = horasT
        this.#valor = quant
    }

    set horasT(horasT){
        this.#horasT = horasT
    }

    get horasT(){
        return this.#horasT
    }

    
    set quant(quant){
        this.#valor = quant
    }

    get quant(){
        return this.#valor
    }

    get salario(){
        return this.#salario
    }

    calcularSalario(){
        this.#salario = this.#horasT + this.#valor
    }
    toString(){
        return super.toString() + ", Horas: " + this.#horasT + ", Valor" + this.#valor + ", Salario: " + this.#salario
    }

}


let leo = new Estudante("Leo", 10, 7.8)
leo.calcularMedia()
console.log(leo.toString())

let fernando = new Professor("Fernando", 160, 45.43)
fernando.calcularSalario()
console.log(fernando.toString())
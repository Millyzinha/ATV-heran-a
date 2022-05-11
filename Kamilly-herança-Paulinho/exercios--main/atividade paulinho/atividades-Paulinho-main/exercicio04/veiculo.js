class Veiculo{
    #nome
    #marca
    constructor(nome, marca ){
        this.#nome = nome
        this.#marca = marca
    }

    set nome(nome){
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }

    set marca(marca){
        this.#marca = marca
    }

    get marca(){
        return this.#marca
    }

    toString(){
        return "Nome Veiculo: " + this.#nome + " , Marca: " + this.#marca
    }

}

class Carro extends Veiculo{
    #portas
     constructor(portas, nome, marca){
         super(nome, marca), this.#portas = portas
 
 
     }
     set portas(portas){
         this.#portas = portas
     }
 
     get portas(){
         return this.#portas
     }
 
     toString(){
         return super.toString() + ", Quantidade de Portas: " + this.#portas
     }
 
 }

 class Caminhao extends Veiculo{
    #eixos
     constructor(eixos, nome, marca){
         super(nome, marca), this.#eixos = eixos
 
     }
     set eixos(eixos){
         this.#eixos = eixos
     }
 
     get eixos(){
         return this.#eixos
     }
 
     toString(){
         return super.toString() + ", Eixo Veiculo : " + this.#eixos
         
     }
 
 }

 let carro1 = new Carro("4 portas.", "Brasilia", " Volkswagen ")
 console.log(carro1.toString())
 let carro2 = new Caminhao("piloto", "Marajó", "Chevrolet")
 console.log(carro2.toString())

 
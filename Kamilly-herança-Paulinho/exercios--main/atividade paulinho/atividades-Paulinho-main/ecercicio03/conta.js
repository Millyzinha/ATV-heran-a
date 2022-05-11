class Conta{
    #titular
    #numero
    constructor(titular, numero ){
        this.#titular = titular
        this.#numero = numero
    }

    set titular(titular){
        this.#titular = titular
    }

    get titular(){
        return this.#titular
    }

    set numero(numero){
        this.#numero = numero
    }

    get numero(){
        return this.#numero
    }

    toString(){
        return "Titular: " + this.#titular + ", Número Conta: " + this.#numero
    }

}

class Especial extends Conta{
    #limiteConta
     constructor(limiteConta, titular, numero){
         super(titular, numero), this.#limiteConta = limiteConta
 
 
     }
     set limiteConta(limiteConta){
         this.#limiteConta = limiteConta
     }
 
     get limiteConta(){
         return this.#limiteConta
     }
 
     toString(){
         return super.toString() + ", Limite da Conta : " + this.#limiteConta
     }
 
 }

 class Poupanca extends Conta{
    #aniversario
     constructor(aniversario, titular, numero){
         super(titular, numero), this.#aniversario = aniversario
 
 
     }
     set aniversario(aniversario){
         this.#aniversario = aniversario
     }
 
     get aniversario(){
         return this.#aniversario
     }
 
     toString(){
         return super.toString() + ", Data de Nascimento : " + this.#aniversario
         
     }
 
 }

 let Conta1 = new Especial("986", "Marcyelen", "88623.54")
 console.log(Conta1.toString())
 let Conta2 = new Poupanca("24/04/2004", "Raí", "59844.10")
 console.log(Conta2.toString())
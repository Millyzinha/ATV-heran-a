class Pessoa{
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

    
    toString(){
        return "Nome Pessoa: " + this.#nome 
    }

}

class PessoaFisica extends Pessoa{
    #cpf
    #rg
     constructor(cpf, rg, nome){
         super(nome), 
         this.#cpf = cpf
         this.#rg = rg
 
 
     }
     set cpf(cpf){
         this.#cpf = cpf
     }
 
     get cpf(){
         return this.#cpf
     }

     set rg(rg){
        this.#rg = rg
    }

    get rg(){
        return this.#rg
    }
 
     toString(){
         return super.toString() + ", CPF: " + this.#cpf + " , RG: " + this.#rg
     }
 
 }

 class PessoaJuridica extends Pessoa{
    #cnpj
    #ie
     constructor(cnpj, ie, nome){
         super(nome),
        this.#cnpj = cnpj
        this.#ie = ie
 
     }
     set cnpj(cnpj){
         this.#cnpj = cnpj
     }
 
     get cnpj(){
         return this.#cnpj
     }
     set ie(ie){
        this.#ie = ie
    }

    get ie(){
        return this.#ie
    }


 
     toString(){
         return super.toString() + ", CNPJ: " + this.#cnpj + ", ie: " + this.#ie
         
     }
 
 }
 

 
 let pessoa1 = new PessoaFisica("458.965.523-85", "3.563.412", "Bruna")
 console.log(pessoa1.toString())
 let pessoa2 = new PessoaJuridica("333.555588/888", "888896", "Renata")
 console.log(pessoa2.toString())

 
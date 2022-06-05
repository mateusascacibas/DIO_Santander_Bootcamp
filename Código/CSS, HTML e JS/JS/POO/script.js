class ContaBancaria{
    constructor(agencia, numero, tipo, saldo = 0){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get getSaldo(){
        return this.saldo
    }

    set setSaldo(saldo){
        this.saldo = saldo;
    }

    sacar(saque){
        this.saldo -= saque;
    }
    
    depositar(deposito){
        this.saldo += deposito;
    }
}

class ContaCorrente  extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'Corrente';
        cartaoCredito = this.cartaoCredito;
    }

    get getCartao(){
        return this.cartaoCredito;
    }
    set setCartao(cartao){
        this.cartaoCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Poupanca'
    }
}

class ContaUniversitaria  extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'Poupanca'
    }
    sacar(valor){
        if(valor > 500){
            return "Não pode sacar."
        }else{
            this.saldo -= valor;
        }
    }

}
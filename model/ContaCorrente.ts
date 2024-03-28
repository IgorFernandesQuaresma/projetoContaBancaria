import { Conta } from "./Conta";

export abstract class ContaCorrente extends Conta {
    private _limite: number;

    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super (numero, agencia, tipo, titular, saldo)
        this._limite = limite
    }


    public get limite(): number {
        return this._limite;
    }
    

    public set limite(limite : number) {
        this._limite = limite
    }


    public sacar(valor: number): boolean {
        if ((this.saldo + this._limite) >= valor && (this._limite - valor) <= 0 ) {
            this.saldo -= valor
        // corrigi aqui, e subtrai o valor do limite também
            this._limite = 0
            return true;

        } else if ((this.saldo + this._limite) >= valor && (this._limite - valor) > 0 ) {
            this.saldo -= valor
            this._limite = this._limite - valor
            return true;
        } 
        
        else {
            console.log("Saldo insuficiente");
            return false;
        }
    }

    public depositar(valor: number) {
        
    // Verifica se o saldo é diferente de zero
    if (this.saldo !== 0) {
        // Se o saldo for diferente de zero, adiciona o valor ao saldo
        this.saldo += valor;

        // Verifica se o limite já está no máximo
        if (this._limite < this.limite) {
            // Se o limite não estiver no máximo, aumenta o limite até o máximo
            this._limite += valor;
            // Se o limite ultrapassar o máximo, ajusta para o máximo
            if (this._limite > this.limite) {
                this._limite = this.limite;
            }
        }
    } else {
        // Se o saldo for zero, define o saldo como o valor depositado
        this.saldo = valor;

        // Define o limite máximo como o limite inicial
        this._limite = this.limite;
    }
    }


    public visualizar(): void {
        super.visualizar();
        console.log(`O limite da conta é ${this._limite}`)
    }
}


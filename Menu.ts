import readline = require("readline-sync");
import { Conta } from "./model/Conta";
import { cores } from "./src/ultil/Cores";
import { ContaController } from "./controller/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";


export function main() {
let opcao, numero, agencia, saldo, tipo, limite, aniversarioConta: number; 
let titular: string
const tiposContas = ['Conta Corrente', 'Conta Poupança']
let conta: ContaController = new ContaController();
let cc1: ContaCorrente = new ContaCorrente(1, 123, 1, "Igor Fernandes", 300, 12121995);
let cc2: ContaCorrente = new ContaCorrente(12, 1234, 1, "Testando123" , 30000, 130000);
let cp3: ContaPoupanca = new ContaPoupanca(54, 433, 2, "Testando 54", 10000, 16121995)
conta.cadastrar(cc1)
conta.cadastrar(cc2) 
conta.cadastrar(cp3)


while (true) {
console.log(cores.bg.black, cores.fg.gray)
console.log("*****************************************************");
console.log("                                                     ");
console.log("                BANCO DO Igao                        ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar Conta                          ");
console.log("            2 - Listar todas as Contas               ");
console.log("            3 - Buscar Conta por Numero              ");
console.log("            4 - Atualizar Dados da Conta             ");
console.log("            5 - Apagar Conta                         ");
console.log("            6 - Sacar                                ");
console.log("            7 - Depositar                            ");
console.log("            8 - Transferir valores entre Contas      ");
console.log("            9 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log(cores.reset)

console.log("Digite a opção desejada");

opcao = readline.questionInt ("");

switch(opcao) {
    case 1:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Vamos criar sua conta', cores.reset)


        console.log("Digite o nome do titular da conta: ")
        titular = readline.question(" ")

        console.log("Digite a agencia: ")
        agencia = readline.questionInt(" ")

        console.log("Digite o tipo de conta: ")
        tipo = readline.questionInt(" ")

        console.log("Saldo a depositar: ")
        saldo = readline.questionFloat(" ")

         switch(tipo) {
            case 1:

            console.log("Qual limite inicial da conta: ")
            limite = readline.questionFloat(" ")
            conta.cadastrar(new ContaCorrente(conta.gerarNumero(), agencia, tipo, titular, saldo, limite))
            break;

            case 2 :

            console.log("Qual o aniversario da conta poupança: ")
            aniversarioConta = readline.questionInt(" ")
            conta.cadastrar(new ContaPoupanca (conta.gerarNumero(), agencia, tipo, titular, saldo, aniversarioConta))

            break;
        } 


        break;

    case 2:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Vamos listar suas contas', cores.reset)
            conta.listarTodas()
        break;

    case 3:
        aguardar()
        console.log(cores.fg.whitestrong,

            'Vamos buscar suas contas', cores.reset)
            let busca = readline.questionInt("Digite o numero da conta: ")
            conta.procurarPorNumero(busca)
            
        break;

    case 4:
        aguardar();
        console.log(cores.fg.whitestrong, 'Atualizar conta', cores.reset);
        let numero = readline.questionInt("Digite o numero da conta: ");
        
        let buscaConta = conta.buscarNoArray(numero);
    
        if (buscaConta != null) {
            let titular = readline.question("Digite o titular: ");
            let agencia = readline.questionInt("Digite a nova agencia da conta: ");
            let tipo = buscaConta.tipo;
            let saldo = readline.questionInt("Digite o saldo: ");
    
            switch (tipo) {
                case 1: 
                    let limite = readline.questionInt("Digite o limite: ");
          
                    conta.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                    break;
                case 2: 
                    let aniversarioConta = readline.questionInt("Digite o aniversario: ");
                    conta.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversarioConta));
                    break;
            }
        } else { 
            console.log(`A conta ${numero} não foi encontrada`);
        }
    
            /* conta.buscarNoArray(busca4)
            conta.procurarPorNumero(busca4) // não consegui implementar
            let novaAgencia = readline.questionInt("Digite o numero da nova agencia: ") */
            
        break;

    case 5:
        aguardar()
        let contaDeletada = readline.questionInt("Digite o numero da conta deletada: ")
        conta.deletar(contaDeletada)
        break;

    case 6:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Sacar', cores.reset)
        break;

    case 7:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Depositar', cores.reset)
        break;

    case 8:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Transformar', cores.reset)
        break;

    case 9:  
        console.log(cores.fg.greenstrong,
            "Saindo do programa...");
            sobre()
        process.exit(0);
    default:

        console.log("Opção inválida! Por favor, escolha uma opção válida.");

        break;
}    
    console.log("Pressione Enter para continuar...");
    readline.question("");

}}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Igor Fernandes Quaresma ");
    console.log("Generation Brasil");
    console.log("https://github.com/IgorFernandesQuaresma");
    console.log("*****************************************************");
}

export function aguardar(): void {
    console.log(cores.fg.greenstrong)
    console.log("\n*****************************************************");
    console.log("Executando...");
    console.log("*****************************************************");
    console.log(cores.reset)
}

main()
    







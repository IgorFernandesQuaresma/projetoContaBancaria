import readline = require("readline-sync");
import { Conta } from "./model/Conta";
import { cores } from "./src/ultil/Cores";
import { ContaController } from "./controller/ContaController";
import { ContaCorrente } from "./model/ContaCorrente";


export function main() {
let opcao: number; 

let conta: ContaController = new ContaController();
let cc1: ContaCorrente = new ContaCorrente(1, 123, 2, "Igor Fernandes", 300, 1000);
conta.cadastrar(cc1)




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
            
        break;
    case 4:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Atualizar conta', cores.reset)
        break;
    case 5:
        aguardar()
        console.log(cores.fg.whitestrong,
            'Apagar', cores.reset)
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
    







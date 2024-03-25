import readline = require("readline-sync");


let opcao: number;

while (true) {

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

console.log("Digite a opção desejada");

opcao = readline.questionInt ("");

switch(opcao) {
    case 1:
        console.log('Vamos criar sua conta')
        break;
    case 2:
        console.log('Vamos listar suas contas')
        break;
    case 3:
        console.log('Vamos buscar suas contas')
        break;
    case 4:
        console.log('Atualizar conta')
        break;
    case 5:
        console.log('Apagar')
        break;
    case 6:
        console.log('Sacar')
        break;
    case 7:
        console.log('Depositar')
        break;
    case 8:
        console.log('Transformar')
        break;
    case 9:
        console.log("Saindo do programa...");
        process.exit(0);
    default:
        console.log("Opção inválida! Por favor, escolha uma opção válida.");
        break;
}

}
    







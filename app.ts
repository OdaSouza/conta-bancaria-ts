import { Account } from "./class/account.js";
import { ContaEspecial } from "./class/ContaEspecial.js";
import { IdDoc } from "./class/moduleId.js";


// Deve separar as classes e os construtores em arquivos diferentes, 
// e importar os arquivos necessários em constantes fora da classe
//  para usar as classes e os construtores. 

/*  const conta: Account = new Account("Jane Doe", 987654321);
console.log(conta);

const  conta2: Account = new Account("John Doe", 123456789);
console.log(conta2);

conta.displayAccountInfo(conta.name, conta.accountNumber);
conta.withdraw();

conta2.displayAccountInfo(conta2.name, conta2.accountNumber);
conta2.deposit();  */

// O construtor herda de status, e o status herda de account, 
// então é possível usar os métodos e propriedades de ambas as classes.



const specialAccount: ContaEspecial = new ContaEspecial("Cliente Especial", 987654321, 10000, 5000);
console.log(specialAccount);

const contaCompanetica: Account = new Account("Cliente Comum", 123456789, 5000);
contaCompanetica.getBalance();


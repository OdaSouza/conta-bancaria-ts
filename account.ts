


export class Account {
  name: string;
  accountNumber: number;
  status: number;

  constructor(nomeios: string, accountNumber: number, numelos: number = 0) {
    this.name = nomeios;
    this.accountNumber = accountNumber;
    this.status = numelos;}
  

 /*  displayAccountInfo(name: string, accountNumber: number): void {
    console.log(`Meu nome é: ${name}`);
    console.log(`Meu numero de conta é: ${accountNumber}`);
    console.log(`Meu saldo é: ${this.status}`); */
  

  // métodos para depositar e sacar dinheiro, 
  // que apenas imprimem mensagens no console,
  //  sem realizar cálculos ou alterações no saldo da conta.

deposit = (): void => {
  console.log("Depositando dinheiro...");
};

withdraw = (): void => {
  console.log("Sacando dinheiro...");
};

getBalance = (): void => {
  console.log(`O saldo atual é: ${this.status}`); 

}
};


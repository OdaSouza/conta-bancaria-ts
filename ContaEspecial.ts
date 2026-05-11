import { Account } from "./account";


export class ContaEspecial extends Account {

  contajuridica: number;


  constructor(nomeios: string, accountNumber: number, numelos: number = 0, cnpj: number) {
    super(nomeios, accountNumber, numelos);
    this.contajuridica = cnpj;
  }
  getLoan = (): void => {
    console.log("Solicitando empréstimo...");
  };
}

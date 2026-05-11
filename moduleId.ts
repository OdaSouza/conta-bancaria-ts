import { Account } from "./account";

export class IdDoc extends Account {
  id: number


  // Após extender a clahsee deve usaor super e instanciar na assinatura do contrutor 
  // as tipagens para chamar os dados.
  constructor(identity: number, nomeios: string, accountNumber: number, numelos: number = 0) {
    super(nomeios, accountNumber, numelos);
    this.id = identity;
  }

}
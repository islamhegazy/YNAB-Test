

export class Account {
 constructor(
    public id: string,
    public name: string,
    public type: string,
    public on_budget: boolean,
    public closed: boolean,
    public balance: number,
    public cleared_balance: number,
    public  uncleared_balance: number,
    public  transfer_payee_id: string,
    public  deleted: boolean,
    public note?: any
 ){}
}
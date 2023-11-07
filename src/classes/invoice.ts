import { hasFormatter } from "../interfaces/hasFormatter.js";

export class invoice implements hasFormatter {
    readonly client : string; // can access anywhere but can't change
    private details : string; // cannot access outside of this class
    public amount : number; //can access any where and mutate
    constructor(c:string, d:string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}.`
    } 
}
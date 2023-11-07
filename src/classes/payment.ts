import { hasFormatter } from "../interfaces/hasFormatter.js";

export class payment implements hasFormatter {
    readonly recipient : string; // can access anywhere but can't change
    private details : string; // cannot access outside of this class
    public amount : number; //can access any where and mutate
    constructor(c:string, d:string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}.`
    } 
}
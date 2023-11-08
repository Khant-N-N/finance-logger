import { hasFormatter } from "../interfaces/hasFormatter.js";

export class payment implements hasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owed ${this.amount} for ${this.details}.`;
  }
}

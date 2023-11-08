import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

const outputListContainer =
  document.querySelector<HTMLUListElement>(".item-list")!;
const typeSelector = document.querySelector<HTMLSelectElement>("#type");
const amount = document.querySelector("#amount") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

document
  .querySelector(".new-item-form")
  ?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let doc: hasFormatter =
      typeSelector?.value === "invoice"
        ? new invoice(tofrom?.value, details?.value, amount?.valueAsNumber)
        : new payment(tofrom.value, details.value, amount.valueAsNumber);

    const list = document.createElement("li");
    const header: any = document.createElement("h4");
    header.textContent = typeSelector?.value;
    const para = document.createElement<any>("p");
    para.textContent = doc.format();
    list.append(header, para);
    outputListContainer?.appendChild(list);
  });

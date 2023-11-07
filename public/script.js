var _a;
import { invoice } from "./classes/invoice.js";
import { payment } from "./classes/payment.js";
const outputListContainer = document.querySelector(".item-list");
const typeSelector = document.querySelector("#type");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
const tofrom = document.querySelector("#tofrom");
(_a = document.querySelector(".new-item-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if ((typeSelector === null || typeSelector === void 0 ? void 0 : typeSelector.value) === "invoice") {
        doc = new invoice(tofrom === null || tofrom === void 0 ? void 0 : tofrom.value, details === null || details === void 0 ? void 0 : details.value, amount === null || amount === void 0 ? void 0 : amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    const list = document.createElement("li");
    const header = document.createElement("h4");
    header.textContent = typeSelector === null || typeSelector === void 0 ? void 0 : typeSelector.value;
    const para = document.createElement("p");
    para.textContent = doc.format();
    list.append(header, para);
    outputListContainer === null || outputListContainer === void 0 ? void 0 : outputListContainer.appendChild(list);
});

// class, interface, module

import { HasPrint } from "./12-classImplementInterface";
import { Invoid, Payment } from "./12-interfaceForClass";

const documentOne: HasPrint = new Invoid('Fami', 'drink milk', 500000);
const documentTwo: HasPrint = new Payment('Vietnam Airline', 'fly', 2500000);

const allDocuments: HasPrint[] = [];
allDocuments.push(documentOne);
allDocuments.push(documentTwo);

console.log(allDocuments);


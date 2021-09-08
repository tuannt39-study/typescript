// optional chaining
import { send } from './mailer';

interface Address {
  city: string;
}

interface Pet {
  name: string;
}

interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
  addresses?: Address[];
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'tuannt4',
  phone: '09987654567',
  email: 'tuannt4@sapo.vn',
  pet: {
    name: 'A'
  }
}

const otherContact: Contact = {
  name: 'tuannt4',
  phone: '09987654567',
  addresses: [
    {
      city: 'ha noi',
    },
  ],
};

contacts.push(newContact);
contacts.push(otherContact);

if (newContact.email) {
  send(newContact.email, '1', '2');
}

function getPetName(contact: Contact): string {
  return contact.pet?.name || '';
}

const petName1 = getPetName(newContact);
const petName2 = getPetName(otherContact);
console.log(petName1);
console.log(petName2);

function getFirstAddress(contact: Contact) {
  return contact.addresses?.[0];
}

const city1 = getFirstAddress(newContact);
const city2 = getFirstAddress(otherContact);
console.log(city1?.city);
console.log(city2?.city);

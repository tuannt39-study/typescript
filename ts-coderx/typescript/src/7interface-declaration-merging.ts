// interface declaration merging
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

interface Button {
  label: string;
  onClick: () => void;
}

const button: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
};

interface IconButton extends Button {
  icon: string;
}

const addToCartBtn: IconButton = {
  label: 'add to cart',
  onClick: () => {
    console.log('click add to cart');
  },
  icon: 'cart-icon',
};

class MyContact implements Contact {
  name: string;
  phone: string;

  constructor(name:string, phone:string) {
    this.name = name;
    this.phone = phone;
  }
}

const a = new MyContact('a', '123');
console.log(a.name);

class ContactApp {
  render() {
    const contacts: Contact[] = [
      { name: 'A', phone: '123'},
      { name: 'B', phone: '123'},
      { name: 'C', phone: '123'},
    ];
    console.table(contacts);
  }
}

const app = new ContactApp();
app.render();

interface ContactAdapter {
  getData: () => Promise<Contact[]>;
}

class MyContactAdapter implements ContactAdapter {
  async getData() {
    // TODO get data from api
    const contacts: Contact[] = [
      { name: 'A', phone: '123' },
      { name: 'B', phone: '123' },
      { name: 'C', phone: '123' },
    ];
    return contacts;
  }
}

class ContactAppNew {
  adapter: ContactAdapter;
  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }
  async render() {
    const contacts: Contact[] = await this.adapter.getData();
    console.table(contacts);
  }
}

const adapter = new MyContactAdapter();
const appNew = new ContactAppNew(adapter);
appNew.render();

interface Contact {
  isDeleted?: boolean;
}

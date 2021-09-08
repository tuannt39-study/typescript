// interface

interface Contact {
  name: string;
  phone: string;
  email: string;
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'tuannt4',
  phone: '09987654567',
  email: 'tuannt4@sapo.vn'
}

contacts.push(newContact);

// optional properties
import { send } from './mailer';

interface Contact {
  name: string;
  phone: string;
  email?: string;
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'tuannt4',
  phone: '09987654567',
  email: 'tuannt4@sapo.vn'
}

const otherContact: Contact = {
  name: 'tuannt4',
  phone: '09987654567'
};

contacts.push(newContact);
contacts.push(otherContact);

if (newContact.email) {
  send(newContact.email, '1', '2');
}

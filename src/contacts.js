import fs from 'node:fs/promises';
import { nanoid } from 'nanoid';
import path from 'node:path';
import 'colors';

const contactsPath = path.join('src', 'db', 'contacts.json');

export async function listContacts() {
    return await fs.readFile(contactsPath, { encoding: 'utf-8' })
        .then(data => { return JSON.parse(data); })
        .catch(err => { throw err; });
}

export async function getContactById(contactId) {
    return await listContacts()
        .then(data => { return data.find(contact => contact.id === contactId) })
        .catch(err => { throw err; });
}

export async function removeContact(contactId) {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === contactId);
    if (idx === -1) {
        return null;
    }
    const [removedContact] = contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
}

export async function addContact(data) {
    const contacts = await listContacts();
    const { name, email, phone } = data;
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}
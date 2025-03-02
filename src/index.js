import { program } from "commander";
import { listContacts, getContactById, addContact, removeContact } from "./contacts.js";
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, ...data }) {
    switch (action) {
        case "list":
            await listContacts()
                .then(contacts => { console.table(contacts); })
                .catch(err => { console.error("Error getting contacts list: ", err.message); });
            break;
        case "get":
            await getContactById(id)
                .then(contact => {
                    if (contact) {
                        console.log(contact);
                    } else {
                        console.warn("\x1B[31m Contact with id:", id, "not found!");
                    }
                })
                .catch(err => { console.error("\x1B[31m Error getting contact by ID:", err.message); });
            break;

        case "add":
            await addContact(data)
                .then(data => { console.log(data); })
                .catch(err => { console.error("\x1B[31m Error adding contact:", err.message); });
            break;

        case "remove":
            await removeContact(id)
                .then(contact => {
                    if (contact) {
                        console.log(contact);
                    } else {
                        console.warn("\x1B[31m Contact with id:", id, "not found!");
                    }
                })
                .catch(err => { console.error("\x1B[31m Error removing contact:", err.message); });
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);
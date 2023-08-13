// const contactsModule = require('./contacts');


// contactsModule.listContacts();


// contactsModule.getContactById(1); 


// contactsModule.addContact('Nowa Osoba', 'nowy@email.com', '123-456-7890');


// contactsModule.removeContact(2); 

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactsModule = require('./contacts');

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsModule.listContacts();
      break;

    case "get":
      if (id) {
        contactsModule.getContactById(id);
      } else {
        console.error("Please provide an ID.");
      }
      break;

    case "add":
      if (name && email && phone) {
        contactsModule.addContact(name, email, phone);
      } else {
        console.error("Please provide name, email, and phone.");
      }
      break;

    case "remove":
      if (id) {
        contactsModule.removeContact(id);
      } else {
        console.error("Please provide an ID.");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

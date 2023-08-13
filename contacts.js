const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const contacts = require('./db/contacts.json');

      console.log(contacts);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const contacts = require('./db/contacts.json');

      const contact = contacts.find((item) => item.id === contactId);
      console.log(contact);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const contacts = require('./db/contacts.json');

      const updatedContacts = contacts.filter((item) => item.id !== contactId);

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2), (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(`Contact with id ${contactId} has been removed.`);
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}


function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    try {
      const contacts = require('./db/contacts.json');

      const newContact = {
        id: contacts.length + 1,
        name,
        email,
        phone,
      };

      const updatedContacts = [...contacts, newContact];

      fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2), (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('New contact has been added.');
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

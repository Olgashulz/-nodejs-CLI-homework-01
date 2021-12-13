const shortid = require("shortid");
// const fs = require("fs/promises");

// const contactsPath = require("./contactsPath");
const updateContactsList = require("./updateContactsList");

const listContacts = require("./listContacts");




const addContact = async (contact) => {
    const newContact = {
        ...contact,
        id: shortid.generate(),
    };

    const contacts = await listContacts();
    // console.log(contacts)
    contacts.push(newContact);
    await updateContactsList(contacts);
    return newContact;
}

module.exports = addContact;


const fs = require("fs/promises");
const { updateContact } = require(".");
const contactsPath = require("./contactsPath");


const updateContactsList = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = updateContactsList;

const listContacts = require("./listContacts");
const updateContactsList = require("./updateContactsList");

const updateContact = async ({ id, name, email, phone }) => {
    const contacts = await listContacts();
    const idx = contacts.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    };
    contacts[idx] = { id, name, email, phone };
    updateContactsList(contacts);
    return contacts[idx];
}

module.exports = updateContact;
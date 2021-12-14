const getContactsList = require("./db/getContactsList");
const getContactById = require("./db/getContactById");
const addContact = require("./db/addContact");
const updateContact = require("./db/updateContact");
const removeContact = require("./db/removeContact");
const listContacts = require("./db/listContacts");

module.exports = {
    listContacts,
    getContactsList,
    getContactById,
    addContact,
    updateContact,
    removeContact,
};


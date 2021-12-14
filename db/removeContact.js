const getContactsList = require("./getContactsList");
const updateContactsList = require("./updateContactsList");


const removeContact = async (id) => {
    try {
        const contacts = await getContactsList();

        console.log(id);
        console.log(contacts);

        const idx = contacts.findIndex((item) => item.id === id);
        if (idx === -1) {
            null;
        }

        console.log(idx);

        const newContacts = contacts.filter((_, index) => index !== idx);
        console.log(newContacts);
        await updateContactsList(newContacts);

        // console.table(newContacts);

        return contacts[idx];
    } catch (error) {
        console.log(error);
    }

}

module.exports = removeContact;
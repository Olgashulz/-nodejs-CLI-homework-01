const contactsOperations = require("./db");
// console.log(contactsOperations.getAll)

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const contacts = await contactsOperations.listContacts();
            console.log(contacts);
            break;
        case "get":
            const contact = await contactsOperations.getContactById(id);
            console.log(contact);
            break;
        case "add":
            const newContact = await contactsOperations.addContact({ name, email, phone })
            console.log(newContact);
            break;

        // case "update":
        //     const updateContact = await contactsOperations.updateContact({ id, name, email, phone })
        //     console.log(updateContact);
        //     break;

        default:
            console.log("Unknown operation");
    }
}

const id = "3";
const contact = {
    name: "Nataia Smoliak",
    email: "Nataia@gmail.com",
    phone: "+380973125471",
}

// const updateContact = {
//     name: "Anton Covtonuk",
//     email: "Anton@gmail.com",
//     phone: "+380980985141"
// }
// const updateId = "1";

// invokeAction({ action: "update", ...updateContact, id: updateId });
invokeAction({ action: "list" });
invokeAction({ action: "get", id });
invokeAction({ action: "add", ...contact })


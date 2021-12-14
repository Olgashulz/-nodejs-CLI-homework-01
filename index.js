const { Command } = require("commander");

const {
    listContacts,
    getContactById,
    addContact,
    // updateContact,
    removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            listContacts();
            break;
        case "get":
            getContactById(id);
            break;
        case "add":
            addContact(name, email, phone);
            break;
        // case "update":
        //     updateContact(id, name, email, phone);
        //     break;
        case "remove":
            removeContact(id);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};


const program = new Command();
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);


// const id = "3";
// const update = {
//     name: "Anton Covtonuk",
//     email: "Anton@gmail.com",
//     phone: "+380980985141"
// }

// const contactData = {
//     name: "Natalia Kurchak",
//     email: "Natalia@gmail.com",
//     phone: "+38093451223",
// };

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id });
// invokeAction({ action: "add", ...contactData });
// invokeAction({ action: "remove", id });
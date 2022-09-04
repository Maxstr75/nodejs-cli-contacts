const fs = require("fs").promises;
const path = require("path");

const { customAlphabet } = require("nanoid");
const newId = customAlphabet("1234567890", 10);
// newId = nanoid();

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию

// Получаем и выводим полный список контактов в таблицу
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const list = JSON.parse(data);
    return console.table(list);
  } catch (error) {
    console.error(error.message);
  }
}

// Получаем контакт по ИД
async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "uyf8");
    const contacts = JSON.parse(data);

    const contact = contacts.filter(
      (contact) => contact.id === Number(contactId)
    );
    return console.table(contact);
  } catch (error) {
    console.error(error.message);
  }
}

// Удаляем контакт
async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "uyf8");
    const contacts = JSON.parse(data);

    const filterContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(filterContacts, null, 2));
    console.table(filterContacts);
    console.log("\x1b[32m Successfully deleted");
  } catch (error) {
    console.error(error.message);
  }
}

// Добавляем контакт
async function addContact(name, email, phone) {
  const newContact = {
    id: Number(newId()),
    name,
    email,
    phone,
  };
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsedContacts = jSON.parse(data);

    const contacts = [...parsedContacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.table(contacts);
    console.log("\x1b[32m Successfully added");
  } catch (error) {
    console.error(error.message);
  }
}

//Экспортируем созданные функции
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

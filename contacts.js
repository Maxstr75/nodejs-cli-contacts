const fs = require("fs").promises;
const path = require("path");

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
function removeContact(contactId) {
  // ...твой код
}

// Добавляем контакт
function addContact(name, email, phone) {
  // ...твой код
}

//Экспортируем созданные функции
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(_dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию

// Получаем и выводим полный список контактов в таблицу
function listContacts() {
  // ...твой код
}

// Получаем контакт по ИД
function getContactById(contactId) {
  // ...твой код
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

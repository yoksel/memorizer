const fs = require('fs');

const listData = require('russian-words-2mb');
const readyLists = './src/js/list.js';
const listsMax = 100;
const singleListLength = 10;

const varName = 'list';
const listPrefix = `${varName}[${varName}.length] = `;
let newData = `${varName} = [];\n\n`;

//---------------------------------------------

createRandomLists();

//---------------------------------------------

function createRandomLists() {
  for (var i = 0; i < listsMax; i++) {
    newData += createList();
  }
  writeMyData(newData);
}

function createList() {
  const randList = [];

  for (var i = 0; i < singleListLength; i++) {
    let rand = Math.round(Math.random() * listData.list.length);
    let word = listData.list[rand];
    randList.push(word);
  }

  let listStr = randList
    .map( item => {
      return `'${item}'`
    })
    .join(',\n');

  listStr = `${listPrefix}[\n${listStr}\n];\n\n`;

  return listStr;
}

function writeMyData(data) {
  fs.writeFile(readyLists, data, (err) => {
    if (err) throw err;
    console.log(`Lists saved to ${readyLists}`);
    console.log(`Run npm start or just open index.html in browser`);
  });
}

var $ = tinyLib;
var listElem = $.get('.words');

printList();

//---------------------------------------------

function printList() {
  var randList = [];
  var rand = Math.round(Math.random() * list.length);
  var randElem = list[rand];

  for (var i = 0; i < randElem.length; i++) {
    var liElem = $.create('li')
                  .addClass('words__item')
                  .html(randElem[i]);

    randList.push(liElem);
  }

  listElem.append(randList);
}

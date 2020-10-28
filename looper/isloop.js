"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let keysInLinkedList = Object.keys(linkedlist);
  console.log("linkedList.head", linkedlist.head);
  console.log("keysInLinkedList", keysInLinkedList);
  for (let key in linkedlist) {
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

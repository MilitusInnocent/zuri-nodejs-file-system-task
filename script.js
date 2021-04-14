'use strict';

const fs = require('fs');

const fetch = require("node-fetch");

// Use the Fetch API & ES6
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    //write your data to the posts.json file in the results folder
    let content = JSON.stringify(data, null, 2);
    fs.writeFileSync('./result/posts.json', content);
  	//console.log(data);
  });

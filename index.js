var express = require('express');
const si = require('systeminformation');
var app = express();

let username = '';

app.get('/', function (req, res) {
  res.send(`Hello, ${username}`);
});

app.listen(3000, async function () {
  const users = await si.users();
  const host = await si.osInfo();
  username = `${host.hostname}/${users[0].user}`;
  
  console.log(users, 'users');

  console.log('Example app listening on port 3000!');
});

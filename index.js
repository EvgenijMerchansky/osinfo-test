var express = require('express');
const si = require('systeminformation');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', async function (req, res) {
  let username = '';

  const users = await si.users();
  const host = await si.osInfo();
  username = `${host.hostname}/`; // ${users[0].user}`;

  res.send(`Hello ${username}`);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

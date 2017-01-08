var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {
  console.log("I recevied a GET request.")

  person1 = {
    name: 'Tim',
    email: 'tim@email1.com',
    number: '111 111 1111'
  };

  person2 = {
    name: 'Emily',
    email: 'Emily@email1.com',
    number: '222 111 1111'
  };

  person3 = {
    name: 'John',
    email: 'john@email1.com',
    number: '(333) 333-3333'
  };

  var contactlist = [person1, person2, person3];
  res.json(contactlist);
});

app.listen(3000);
console.log('Server running on port 3000');


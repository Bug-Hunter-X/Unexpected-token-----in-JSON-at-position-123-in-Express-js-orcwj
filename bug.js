const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token '}' in JSON at position 123

//This error is uncommon in Express.js applications that only deal with basic HTTP requests and responses, but it can occur when there's an issue with JSON parsing within a request handler.
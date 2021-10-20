require('dotenv').config();

const { Client } = require('pg');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const client = new Client();
  try {
    await client.connect();
    const dbResult = await client.query('SELECT $1::text as message', [
      'Hello world!',
    ]);
    const { message } = dbResult.rows[0];
    console.log(message); // Hello world!
    await client.end();
    res.send(message);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const run = async () => {};
run();

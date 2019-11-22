const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();
module.exports = api;

const db = require(`./db-datastore`);

api.post('/:id(\\w+)', async (req, res) => {
  try {
    res.send(await db.post(req.params.id));
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

api.put('/:id(\\w+)', bodyParser.text(), async (req, res) => {
  try {
    await db.put(req.params.id, req.body);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});
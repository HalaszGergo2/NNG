const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dispatcher = require('./backend/dispatcher');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.use(bodyParser.json());

app.post('/api/dispatch', async (req, res) => {
  try {
    const result = await dispatcher(req.body);
    res.json(result);
  } catch (err) {
    console.error('Dispatcher hiba:', err);
    res.status(500).json({ error: err.message });
  }
});
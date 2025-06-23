const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dispatcher = require('./backend/dispatcher');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(bodyParser.json());

app.post('/api/dispatch', async (req, res) => {
  try {
    const result = await dispatcher(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Szerver fut: http://localhost:${PORT}`);
});

const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: 'This is your data from the server!' });
});

router.get('/rep', (req, res) => {
  res.send('Rep');
});

module.exports = router;

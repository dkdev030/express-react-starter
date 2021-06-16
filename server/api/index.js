const express = require('express');

const router = express.Router();

router.get('/message', (req, res) => {
  res.json({ message: 'Welcome To React' });
});

module.exports = router;

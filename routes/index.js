const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login')
})

router.use('/youtube', require('./youtube'));

module.exports = router;

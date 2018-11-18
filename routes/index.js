const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.get('/', (req, res) => {
  res.render('form', { heading : 'Templates' });
});

router.post('/', [
    body('name')
      .isLength({ min: 1})
      .withMessage('Please enter a name')
  ], 
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());
    console.log(req.body);
    res.render('form', { heading : 'Templates' });
});

module.exports = router;
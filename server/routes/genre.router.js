const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM "genres"';
  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('an error occurred', err);
      res.sendStatus(500);
    });
  res.sendStatus(500);
});

module.exports = router;

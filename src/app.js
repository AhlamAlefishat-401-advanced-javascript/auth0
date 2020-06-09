'use strict';
const express = require('express');
const cors = require('cors');


const oauth = require('./auth0.js');


const app = express();


app.use(cors());

app.use(express.static('./public'));

app.get('/authorize', oauth, (req, res) => {
  res.status(200).json({token:req.token});
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  },
};
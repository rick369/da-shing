const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router
.get('/infos', (req, res) => {
  const data = [
    {
      id: 1,
      text: 'hello',
    }, {
      id: 2,
      text: 'good',
    }, {
      id: 3,
      text: 'nice',
    },
  ];
  /*
  res.json({
    status: 404,
    errorMessage: '找不到',
    data: []
  });
  */
  setTimeout(() => {
    res.json({
      status: 200,
      data,
    });
  }, 2000);
});

module.exports = router;

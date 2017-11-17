const router = require('express').Router()
const axios = require('axios')

router.get('/getPrices', function(req, res) {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=12')
    .then(data => {
      res.send(data.data)
    })
    .catch(err => {
      console.log('Error when grabbing data from CMC API :: ', err)
    })
})

module.exports = router
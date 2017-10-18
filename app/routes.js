var express = require('express')
var router = express.Router()
const amountPages = [
  'pay-amount-catalogue',
  'pay-amount-openfee',
  'pay-amount-setfee'
]
// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/pay-amount', (req, res) => {
  const index = Math.floor(Math.random() * (amountPages.length - 1))
  res.redirect(`/${amountPages[index]}`)
})

// add your routes here

module.exports = router

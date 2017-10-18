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
  res.redirect(`/${amountPages[randomIntFromInterval(0, amountPages.length - 1)]}`)
})

// add your routes here

module.exports = router

function randomIntFromInterval (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

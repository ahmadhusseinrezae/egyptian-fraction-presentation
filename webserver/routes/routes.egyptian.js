const router = require('express').Router()
const homeController = require('../controllers/home.controller')

router.route('/').get((req, res) => { 
    homeController.index(req,res)
})

router.route('/egyptit').post((req,res) => {
    homeController.egyptit(req,res)
})

module.exports = router
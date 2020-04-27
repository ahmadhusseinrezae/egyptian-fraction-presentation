const { egyptianUnitFraction } = require('egyptian-unitfraction')

class HomeController { 
    
    static index = (req, res) => {
        res.json({message: 'Hi from controller'})
    }

    static egyptit = (req, res) => {
        const numbers = req.body.fraction.split('/')
        if(numbers.length == 2) {
            numbers[0] = parseInt(numbers[0], 10)
            numbers[1] = parseInt(numbers[1], 10)
            if(typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') { 
                res.json({message: ` Input format is not supprted yet! please try digits!`})
            }
            res.json(egyptianUnitFraction(numbers[0],numbers[1]))
        }
        else
            res.json({message: ` Input format is not supprted yet! please try with one single fraction in time!`})
    }
}

module.exports = HomeController
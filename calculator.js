const express = require('express')


const bodyParser = require('body-parser')

const app = express()
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/cookieCalculator.html')
})

app.post('/', function (req, res) {

    var w = req.body.happenedEvent
    console.log(w)
    switch (w) {
        case 'wed':
            res.sendFile(__dirname + '/pages/wedding.html')
            break;
        case 'eng':
            res.sendFile(__dirname + '/pages/engagement.html')
            break;
        case 'birth':
            res.sendFile(__dirname + '/pages/birthday.html')
            break;
        case 'immi':
            res.sendFile(__dirname + '/pages/immigration.html')
            break;
        case 'salary':
            res.sendFile(__dirname + '/pages/salary.html')
            break;
        case 'dom':
            res.sendFile(__dirname + '/pages/domestic.html')
            break;
        case 'int':
            res.sendFile(__dirname + '/pages/international.html')
            break;
        case 'team':
            res.sendFile(__dirname + '/pages/team.html')
            break;
        case 'car':
            res.sendFile(__dirname + '/pages/car.html')
            break;
        case 'house':
            res.sendFile(__dirname + '/pages/house.html')
            break;
        case 'special':
            res.sendFile(__dirname + '/pages/special.html')
            break;
        case 'reza':
            res.sendFile(__dirname + '/pages/reza.html')
            break;
        case 'mate':
            res.sendFile(__dirname + '/pages/mate.html')
            break;
        default:
            break;
    }
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Calculator is listening at http://localhost:3000')
})

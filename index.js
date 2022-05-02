const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require('./model/User')

const config = require('./config/key')

app.use(bodyParser.urlencoded({extended : true}))

app.use(bodyParser.json())

const mongoose = require('mongoose')
const {mongoUrl} = require("./config/dev");
mongoose.connect(config.mongoUrl, {
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected')
).catch(err =>  console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!test')
})

app.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err)
            return res.json({success : false, err})
        return res.status(200).json({
            success: true
        })
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
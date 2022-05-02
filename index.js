const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yrkim:Thirautech1!@boilerplate.tpf4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology : true
}).then(() => console.log('MongoDB Connected')
).catch(err =>  console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// mongodb+srv://yrkim:<password>@boilerplate.tpf4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
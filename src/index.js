const express = require('express')
const helloWorld = require('./helloworld')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
    res.send(helloWorld.buildHello(os.hostname()))
})

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
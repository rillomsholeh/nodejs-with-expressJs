//instantiate express module here
const express = require ("express")

//use express in app variable here
const app = express()

//define the server port here
const port = 5000

//create the homepage route here and inside it create res means, response, and it send string "Hello Express!" to the API

app.get('/', (req, res) => {
    res.send("hello express!")
})

// Create listen here
app.listen(port, () => console.log(`listening on port ${port}`))
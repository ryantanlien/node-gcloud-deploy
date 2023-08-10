const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;

//Basic logging on server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Simple response when a get request is made
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

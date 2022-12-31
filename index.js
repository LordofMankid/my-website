const express = require("express");
const app = express();
const PORT = 3000;

// use express-static middleware to serve static files from "public" folder
app.use(express.static("public"))

// define first route
app.get('/', (req, res) => {
    res.send("<h1> Hello world </h1>")
})

//start server
app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${PORT}`);
})
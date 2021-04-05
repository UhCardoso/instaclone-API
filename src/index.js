const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyparser = require('body-parser');
const { urlencoded } = require("body-parser");

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
});

mongoose.connect("mongodb+srv://<user>:<password>@cluster0.umpgp.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    next();
})

app.use(cors());

app.use(bodyparser.json());
app.use(urlencoded({extended: false}));

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads", "resized")));

app.use(require("./routes"));

const PORT = process.env.PORT || 3333;
server.listen(PORT);

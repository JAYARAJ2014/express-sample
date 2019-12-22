const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4300;

const app = express ();
app.use(bodyParser.json());
app.use(cors());


app.get('/', getCallBack);
app.listen(PORT, listenCallBack);
app.post('/enroll', enrollCallback);

function getCallBack(req, res){
    res.send('Hello from Server');
}

function listenCallBack() {
    console.log("Server running on http://localhost:" + PORT);
}

function enrollCallback(req, res) {
    console.log(req.body);
    setTimeout(function(){
        res.status(401).send({"message": "Data received"});
    },3000);
}
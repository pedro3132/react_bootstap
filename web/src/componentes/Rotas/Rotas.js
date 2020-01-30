const express = require('express');
const app = express();

app.get('/sim', function (req, res){
    res.sendFile(__dirname + '/webi/src2/Coponentes/index.js')
    });


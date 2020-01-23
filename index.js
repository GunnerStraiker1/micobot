var express = require("express");
var bodyParser = require("body-parser");
var http = require('http');
require('dotenv').config()

const example = require("./test/example");

var app = express();

var port = process.env.PORT || 3000;
// var ip = process.env.IP || "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.status(200).send('Server is working');
})

app.post('/suma', (req, res)=>{
    let num1 = parseFloat(req.body.queryResult.parameters.num1);
    let num2 = parseFloat(req.body.queryResult.parameters.num2);
    var resultado = num1 + num2;

    var textoFinal = "El resultado es: " + resultado;


    return res.json({
        fulfillmentText: textoFinal,
        source: 'suma'
    })
})

app.listen(port, () =>{
    console.log('Server is running at port:' + port)
})

// app.post('/', function(req, res) {
//     if (req.body.queryResult.action == "suma") {
//         let num1 = parseFloat(req.body.queryResult.parameters.num1);
//         let num2 = parseFloat(req.body.queryResult.parameters.num2);
//         let sum = num1 + num2;
//         response = num1 + " + " + num2 + " es " + sum;
//         return res.json({
//             "fulfillmentText": response
//         });
//     }
// });


// app.listen(port, ip);

// (async function () {
//     const url = await ngrok.connect(port);
//     console.log(url);
// })();
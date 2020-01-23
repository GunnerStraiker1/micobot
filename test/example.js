
function suma(req, res) {
    if (req.body.queryResult.action == "suma") {
        let num1 = parseFloat(req.body.queryResult.parameters.num1);
        let num2 = parseFloat(req.body.queryResult.parameters.num2);
        let sum = num1 + num2;

        response = num1 + " + " + num2 + " es " + sum;
        res.json({
            "fulfillmentText" : response
        });
    }
}

function resta(req, res) {
    
}

module.exports = {
    suma
}
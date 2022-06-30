const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html"); ///Getting file path current Files location 
  });

app.post('/', function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 =Number(req.body.num2);

  var result = num1 + num2;

    res.send("Results for the calculation is " + result); 
  });


  app.get("/bmiCalculator", function(req, res) {

    res.sendFile(__dirname + "/bmiCalculator.html");


    });
  

    app.post("/bmiCalculator", function(req, res){
      var weight = parseFloat(req.body.weight);     //Look at the html of the first input 
      var height = parseFloat(req.body.height);

      var bmi = weight / (height * height )

      res.send("Hello, your BMI is " + bmi)
    });


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
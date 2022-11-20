const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });
  
  app.post("/", (req, res) => {
    var uname = req.body.username;
    var passwd = req.body.pass;
    if (uname === "Test" && passwd === "1234")
    {res.sendFile(__dirname + "/auth.html");}
    else {res.sendFile(__dirname + "/denied.html")}
  });


  const port = 3000 // Port we will listen on
  
  // Function to listen on the port
  app.listen(port, () => console.log(`This app is listening on port ${port}`));
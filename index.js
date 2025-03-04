const express = require('express');
const app = express();

app.use(express.json);
const port = 3000;

// module.export(signUp.js);

app.get('/user',(req,res) => {
    console.log("This is a get request");
    
})


app.listen(port,(req,res) => {
    console.log(`You are listening to port http://localhost:${port}`);
    
})


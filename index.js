require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000; // port may be bsy on ithers so we use dot env package 

app.get('/', (req, res) => { // handle when someone hit on home
  res.send("helo kittu");
})

app.get('/about', (req,res)=>{
  res.send("it's a about page");
})

app.get('/login', (req, res)=>{
  res.send('its a login page');
})

app.listen(process.env.PORT, () => {
  console.log(`backend is running on http://localhost:${port}`);
})
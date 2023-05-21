const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const uri="mongodb+srv://SeoinLee:abcd1234@atlascluster.qcco0vz.mongodb.net/";

mongoose
    .connect(uri)
    .then(()=> console.log("MongoDB connected..."))
    .catch((err)=>{console.log(err);});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
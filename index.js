// dependencies
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
// variables
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xjslrno.mongodb.net/?retryWrites=true&w=majority`;

// middleware
app.use(express.json());

// methods
app.get("/", (req, res) => {
  res.send("Task Managment Server IS RUNNING!!!")
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})
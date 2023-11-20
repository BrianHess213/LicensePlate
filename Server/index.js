const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
var assert = require('assert');
const items = require('./routes/items');
require('dotenv').config()

 const app = express();
app.use('/sku/items', items);
 app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/sku', (req, res) =>{

  res.send("Hello world from express!");
})


app.listen(3001, function () {
 console.log("App listening on port 3001!");
});

async function run() {
    // TODO:
    // Replace the placeholder connection string below with your
    // Altas cluster specifics. Be sure it includes
    // a valid username and password! Note that in a production environment,
    // you do not want to store your password in plain-text here.
    const url = process.env.MONGODB_URL;

  
    // The MongoClient is the object that references the connection to our
    // datastore (Atlas, for example)
    const client = new MongoClient(url);
  
    // The connect() method does not attempt a connection; instead it instructs
    // the driver to connect using the settings provided when a connection
    // is required.
    await client.connect();
  
    // Provide the name of the database and collection you want to use.
    // If the database and/or collection do not exist, the driver and Atlas
    // will create them automatically when you first write data.
    const dbName = "ItemSKU";
    const collectionName = "items";
  
    // Create references to the database and collection in order to run
    // operations on them.
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

      //database1.collection1.find({"Name": 7432});

    const newItemNumber = 20843370075018;

      const findOneQuery = { "Case GTIN": newItemNumber };

      try {
        const findOneResult = await collection.findOne(findOneQuery);
        if (findOneResult === null) {
          console.log("Couldn't find any item that contain that number\n");
        } else {
          console.log(`Found that item!:\n${JSON.stringify(findOneResult)}\n`);
        }
      } catch (err) {
        console.error(`Something went wrong trying to find one document: ${err}\n`);
      }
    
  }
  run().catch(console.dir);



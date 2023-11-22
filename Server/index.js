const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");


require('dotenv').config();


const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.render('form_post'));

app.post('/form_post', (req, res) => {
  console.log(req.body);
})



app.listen(PORT, function () {
 console.log(`App listening on port ${PORT}`);
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
    const collectionName = "Items";
  
    // Create references to the database and collection in order to run
    // operations on them.
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

      //database1.collection1.find({"Name": 7432});

    const newItemNumber = 8014;

      const findOneQuery = { "Item_Name": newItemNumber};
      

      try {
        const findOneResult = await collection.findOne(findOneQuery);
        if (findOneResult === null) {
          console.log("Couldn't find any item that contain that number\n");
        } else {
          console.log(`Found that item!:\n${JSON.stringify(findOneResult)}\n`);
       
         
          app.get('/getData', (req, res) =>{

            const itemNumber = findOneResult.Item_Name;
            const itemCasePack = findOneResult.Case_Pack_QTY;
            const itemDescription = findOneResult.Description;
            const itemGTIN = findOneResult.Case_GTIN;
            const itemEOL = findOneResult.EOL;
  
            //console.log(itemDescription);

            //res.send(itemCasePack);
            res.json([
              {
                Item_Name: itemNumber,
                Case_Pack_QTY: itemCasePack,
                Description: itemDescription,
                Case_GTIN: itemGTIN,
                EOL: itemEOL
              }
            ])
          });

        }
      } catch (err) {
        console.error(`Something went wrong trying to find one document: ${err}\n`);
      }

      
    
  }
  run().catch(console.dir);

  //https://res.cloudinary.com/practicaldev/image/fetch/s--cVFsg7Jn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g0reqrmbpzmwg9kv9nv3.png
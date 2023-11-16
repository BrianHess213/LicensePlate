const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs"); 
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const itemSchema = {
    item: String,
    casePackQTY: String,
    itemGTIN: String,
    itemUPC: String,
    itemDescription: String,
    itemInUse: Boolean,

 }; 

 const ItemSKU = mongoose.model("SKU", itemSchema);

 const app = express();

 app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/Client/src/AddItem')); 

app.get("/addItem", function(req, res){ 
    res.render("addItem"); 
}); 

 app.post("/addItem", function (req, res) {
    const itemSKU = new ItemSKU({
        email: req.body.email,
        query: req.body.query,
    });
    ItemSKU.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
 });



app.listen(3000, function () {
 console.log("App listening on port 3000!");
});

//https://www.geeksforgeeks.org/how-to-connect-node-js-to-a-mongodb-database/#



const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json([
        {
            item: '8014',
            gtin: "987654321"
        },

        {
            item: '7502',
            gtin: "123456789"   
        }
    ])
});


module.exports = router;
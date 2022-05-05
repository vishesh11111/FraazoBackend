const express = require("express");
const vegitable = require("../models/vegitable.model");

const router = express.Router();

router.get("", async(req , res)=>{
    try {
        const user = await vegitable.find().lean().exec();
        return res.status(200). send(user);
    } catch (error) {
        return res.status(500)
        .send({mgs : error.mgs});
        
    }
})

module.exports = router;
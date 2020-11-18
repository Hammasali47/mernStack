const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
        console.log("PONCH GYA HA")
        res.status(200).json("Poch gya houn na")
 
});
router.get('/upload',(req,res) => {

});
router.post('/',(req,res) => {

})
module.exports = router
const {Router, response} = require("express")
const router = Router()

router.get('/',async (req,res)=>{
    res.send("bobik")
})


module.exports = router


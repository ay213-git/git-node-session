const express=require("express")
const router=express.Router()
const verifyJWT=require("../middleware/verifyJWT")
const basket=require("../controller/basketController")
router.use(verifyJWT)
router.post("/:id",basket.addToBasket)
router.put("/:id",basket.deleteJewel)
router.get("/",basket.getBasket)
router.get("/:id",basket.getJewel)
router.put("/deleteFromBasket/:id",basket.deleteFromBasket)
module.exports=router


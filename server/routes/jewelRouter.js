const express =require("express")
const jewelBlog=require("../controller/jewelController")
const Jewel = require("../models/Jewel")
const verifyJWT=require("../middleware/verifyJWT")
const verifyAdmin = require("../middleware/verifyAdmin")
const router=express.Router()
router.get("/",jewelBlog.getAllJewel)
router.get("/:id",jewelBlog.getJewel)
router.use(verifyJWT)
router.use(verifyAdmin)
router.post("/",jewelBlog.addJewel)
 router.put("/:id",jewelBlog.updateJewel)
 router.delete("/:id",jewelBlog.deleteJewel)


module.exports=router
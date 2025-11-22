const Jewel = require("../models/Jewel")
const getAllJewel = async (req, res) => {
    const jewel = await Jewel.find().lean()
    if (!jewel?.length) {
        return res.status(400).send("no Jewels")
    }
    res.json(jewel)
}
const getJewel = async (req, res) => {
    const { id } = req.params
    const jewel = await Jewel.findById(id).lean()
    if (!jewel) {
        return res.status(400).send("no found user")
    }
    res.json(jewel)
}
const addJewel = async (req, res) => {
    const { jeweName, grossWt, gold, cvd, type, price, img } = req.body

    if (!jeweName || !grossWt || !gold || !cvd || !type || !price) {
        return res.status(400).json("all fileds require")
    }
    const fin = await Jewel.findOne({ jeweName })
    if (fin) {
        return res.status(400).json(" duplicate jewel")
    }
    const jewel = await Jewel.create({ jeweName, grossWt, gold, cvd, type, price, img })
    if (!jewel) {
        return res.status(400).json("no create jewel")
    }
    res.json(jewel)
}
const deleteJewel = async (req, res) => {
    const { id } = req.params
    const jewel = await Jewel.findById(id)
    if (!jewel) {
        return res.status(400).send("no found jewel")
    }
    const result = await jewel.deleteOne()
    res.send("deleted")
}
const updateJewel = async (req, res) => {
    console.log("rrrr");
    const { id } = req.params
    const { jeweName, grossWt, gold, cvd, type, price, img } = req.body
    const jewel = await Jewel.findById(id)
    if (!jewel) {
        return res.status(400).send(`no found user ${jewel}`)
    }
    if (!jeweName || !grossWt || !gold || !cvd || !type || !price) {
        return res.status(400).send("all fileds require")
    }
    jewel.jeweName = jeweName
    jewel.grossWt = grossWt
    jewel.gold = gold
    jewel.cvd = cvd
    jewel.type = type
    jewel.price = price
    jewel.img = img
    const result = await jewel.save()
    res.json(result)

}
module.exports = { getAllJewel, getJewel, addJewel, deleteJewel, updateJewel }
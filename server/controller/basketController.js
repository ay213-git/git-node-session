const Basket=require("../models/Basket");
const Jewel = require("../models/Jewel");
const getBasket =async(req,res)=>{
    const {_id}=req.user
    const basket= await Basket.findOne({user:_id}).populate('products.jewel');
    console.log(basket);
    if(!basket){//||basket.products.length==0
        return res.status(400).send("No jewleries in basket ")
        }
    // const jewelNames = basket.products.map(pro => pro.jewel.jeweName)
    
    //     res.send(`Jewels in basket: ${jewelNames}`);
        return res.send(basket) 

}
const getJewel=async (req,res) => {
    const {_id}=req.user
    const {id}=req.params
    const jewel=await Jewel.findById(id)
    if(!jewel){
        return res.status(400).send(" jewel no found ")
    }

    const basket= await Basket.findOne({user:_id})
    if(!basket){
        return res.status(400).send("No jewleries in basket ")
    }
    const findJewel=basket.products.find(pro=>pro.jewel==id)
    if(!findJewel){
        return res.status(400).send(" jewel no found  on basket")
    }
    
        res.send(`${jewel.jeweName}`)

    
}



const addToBasket=async(req,res)=>{
    const {_id}=req.user   
    const {id}=req.params
    const jewel=await Jewel.findById(id)
    if(!jewel){
        return res.status(400).send("Cannot find jewel")
    }
    const basket=await Basket.findOne({user:_id})
    if(!basket){
    const newBasket=await Basket.create({
        user:_id,
        products:[{jewel:jewel._id,
            quantity:1}]
            
    })
      return res.send(`${jewel.jeweName} added to your new basket`)
    }
    
    // const product= basket.products.find(product=> product.jewel==id)
  
    // if(!product){
    //     // basket.user=basket.user,
    //     basket.products.push({
    //         jewel:jewel._id,
    //         quantity:1})
    //     const update=await basket.save()
    //    res.send(` added`)
    // }
    // if(product){
    //     product.quantity+=1
    //    const update=await basket.save()
    //    res.send(` ${update} qantity added`)
    // }}
    const product = basket.products.find(product => product.jewel==(id));

    if (!product) {
        basket.products.push({ jewel: jewel._id, quantity: 1 });
    } else {
        product.quantity += 1;
    }
    

    await basket.save();
    res.send(`qantity added Basket updated: ${jewel.jeweName} quantity is now ${product ? product.quantity : 1}`);
};

    const deleteJewel=async(req,res)=>{
        const {_id}=req.user
        const {id}=req.params
        const basket=await Basket.findOne({user:_id})
        if(!basket){
        return res.status(400).send("no has basket")
        }
        const jewel=await Jewel.findById(id)
       if(!jewel){
        return res.status(400).send(" Cannot find jewel ") }
        const product =basket.products.find(product=>product.jewel==id)
        if(!product){
        return res.status(400).send(`Cannot find ${jewel.jeweName} on  the basket`)
        }
        if(product.quantity==1){
            basket.products=basket.products.filter(prod=>prod.jewel!=id)
            const updateDeleted=basket.save()
            return res.send(`${jewel.jeweName} removed from basket.`);
        }
       
        product.quantity-=1;
    
        const updateDeleted=basket.save()
         res.send(`${jewel.jeweName} deleted now has  ${product.quantity}`)
    }
    const deleteFromBasket=async(req,res)=>{
        const {_id} =req.user
        const {id}=req.params
        const jewel=await Jewel.findById(id)
        if(!jewel){
        return res.status(400).send(" Cannot find jewel ") }
        const basket= await Basket.findOne({user:_id})
        if(!basket){
            return res.status(400).send("no has basket")
        }
        const findJewel=basket.products.find(pro=>pro.jewel==id)
        if(!findJewel){
          return res.status(400).send(`Cannot find ${jewel.jeweName} on  the basket`)  
        }
       basket.products=basket.products.filter(pro=>pro.jewel!=id)
        const deleted =await basket.save()
        res.send(`${jewel.jeweName} removed from basket.`)
    }

    module.exports={getBasket,getJewel,addToBasket,deleteJewel,deleteFromBasket}





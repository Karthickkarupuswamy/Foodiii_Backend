const restaruant = require("../Modal/restaruantsname")

exports.getAllrestaruant =async(req,res) =>{
    try{
        const result = await restaruant.find()
        res.status(200).send(result)
    }
    catch(err){
        console.log(err)
    }
}
exports.getrestid = async(req,res)=>{
    try{
        const cityRes = await restaruant.findById(req.params.id)
        res.status(200).send(cityRes)
    }
    catch(err){
        console.log(err)
    }
}
exports.getCity = async(req,res)=>{
    try{
        const city =req.params.city
        const requestCity = await restaruant.find({city: city}) // use query
        res.status(200).send(requestCity)
    }
    catch(err){
        console.log(err)
    }
}
exports.getLocationId = async(req,res)=>{
  try{
      const Location =req.params.location_id
      const requestCity = await restaruant.find({location_id: Number(Location)}) // use query
      res.status(200).send(requestCity)
  }
  catch(err){
      console.log(err)
  }
}
exports.getMealId = async(req,res)=>{
  try{
      const Meals =req.params.mealtype_id
      const requestCity = await restaruant.find({mealtype_id: Number(Meals)}) // use query
      res.status(200).send(requestCity)
  }
  catch(err){
      console.log(err)
  }
}
exports.getQuery = async (req, res) => {
  try {
    const {location_id, mealtype_id, cuisine_id, sort, lcost, hcost} =  req.body
    const query = {}


    if(location_id) query.location_id = location_id
    if(mealtype_id) query.mealtype_id = mealtype_id
    if(cuisine_id && cuisine_id.length > 0){
        query.cuisine = { $elemMatch: { id: {$in : cuisine_id} } };
    } 

    if(lcost!== undefined && hcost!== undefined){
        query.min_price = {$lte : hcost, $gte : lcost}
    }

    const sortOptions = {};
    if(sort){
        sortOptions.min_price = sort
    }
    const restaurantName = await restaruant.find(query).sort(sortOptions).exec()

    if(restaurantName.length == 0){
        res.json({msg : "no city found"})
    }else{
        res.json(restaurantName)
    }

}
catch(err){
    res.status(500).json({msg : err})
}
  }
  
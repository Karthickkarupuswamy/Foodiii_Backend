const menu = require("../Modal/menuItem")
exports.getAllMenuItem = async(req, res) =>{
    try {
        let result = await menu.find()
        res.status(200).send(result)
    } catch (error) {
        console.log(error);

    }
}
exports.getAddItems = async(req,res) =>{
    try {
        const name=req.params.name
        let result = await menu.find({name:name})
        res.status(200).send(result)
    } catch (error) {
        console.log(error);

    }
}



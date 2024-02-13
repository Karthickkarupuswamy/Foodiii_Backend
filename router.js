const express = require("express")
const router = express.Router()
const loc = require("./controller/location")
const mealType = require("./controller/mealType")
const restaruant = require("./controller/restaruant")
const signUp = require("./controller/signup")
const signIn = require("./controller/signIn")
const menu = require("./controller/menu")

router.get('/getallloc',loc.getAllLoc)
router.get('/getallrest/:city',restaruant.getCity)
router.get('/getrestbyid/:id',restaruant.getrestid)
router.get('/getall/:location_id',restaruant.getLocationId)
router.get('/getallmeal/:mealtype_id',restaruant.getMealId)
router.get('/getallmeal',mealType.getAllMealtype)
router.get('/getAllRestaruents',restaruant.getAllrestaruant)
router.post('/signup', signUp.getAllSignUp)
router.post('/api/query',restaruant.getQuery)
router.post('/signin',signIn.getSignIn)
router.get("/getallmenu", menu.getAllMenuItem)
router.get("/getmenu/:name", menu.getAddItems)
module.exports =router





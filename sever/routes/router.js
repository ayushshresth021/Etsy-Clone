const express = require("express");
const route = express.Router();
const User = require("../controller/User");
const passport = require("passport");
require("../passport")(passport);
let auth = passport.authenticate("jwt", { session: false });



//kafka
route.post("/api/users/register", User.create);
route.post("/api/users/signin", User.findUser);
route.get("/api/users/signin", User.findUser);
route.post("/api/users/findShopDuplicates", User.findShopDuplicates);
route.put("/api/users/createShop/:id", User.createShop);
route.get("/api/users/getShopById/:id", User.getShopById);
route.put("/api/users/updateItemImageById/:id", User.updateItemImageById);
route.put("/api/users/updateShopImageById/:id", User.updateShopImageById);
route.put("/api/users/updateUser/:id", User.updateUser);
route.put("/api/users/updateUserAddress/:id", User.updateUserAddress);
route.post("/api/users/favourites/add", User.addToFavourite);
route.delete("/api/users/favourites/remove/:id", User.removeFromFavourite);
route.post("/api/users/favourites/list", User.favouriteList);

module.exports = route;

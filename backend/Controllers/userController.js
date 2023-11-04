const express = require("express")
const UserModel = require("../models/userModel")
const loginController = () => {};
const expressAsyncHandler = require("express-async-handler")
const registerController = expressAsyncHandler (async(req, res) => {
    const {name, email, password} = req.body;
    // check for all fields
    if(!name || !email || !password){
        res.send(400);
        throw Error("All necessary input fields have not been filled")
    }
    //pre-existing user
    const userExist = await UserModel.findOne({email})

    if(userExist){
        throw new Error("User already exists")
    }

    //username already taken
    const userNameExist = await UserModel.findOne({name})

    if(userNameExist){
        throw new Error("UserName already taken")
    }

    // create an entry in the db
    const user = await UserModel.create({ user, email, password });
})

module.exports = {loginController, registerController};
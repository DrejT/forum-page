const express = require("express");
const router = express.Router();
const User = require("./../models/user");

// get all users
router.get("/", async (req,res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.status(500).json({message:err.error});
    }
})

// get a particular user
router.get("/:id", getUser,async (req,res) => {
    res.send(res.user);
})

// create a new user
router.post("/", async (req,res) => {
    const validUserFields = await validateUserFields(
        req.body.username,
        req.body.email,
        req.body.password,
        );
    console.log(validUserFields);
    let user = null
    if (validUserFields.username && validUserFields.email && validUserFields.password){
        user = await User.create({
            "username": req.body.username,
            "email": req.body.email,
            "password": req.body.password,
            "role":req.body.role==="admin"?"admin":"user"
        });
    } else {
        return res.status(400).json({message:"user was not created. Please try again"});
    }

    try {
        const newUser = await user.save();
        res.status(201).json({
            user:newUser,
            message:"user created successfully"
        });
    } catch (err) {
        res.status(400).json({message:err.error});
    }
})

// update the category of a user
router.patch("/:id", getUser, async (req,res) => {
    if (req.body.email != null){
        res.user.email = req.body.email;
    }
    try {
        const updatedUser = await res.user.save();
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

// dekete an existing user
router.delete("/:id", getUser, async (req,res) => {
    try {
        await res.user.deleteOne({id:req.params.id});
        res.json({message:"user deleted"});
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null){
            return res.status(404).json({message:"user not found"});
        }
    } catch (err) {
        return res.status(500).json({message:"internal server error"});
    }
    res.user = user;
    next()
}


module.exports = router;
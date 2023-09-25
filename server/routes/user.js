const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const { validateUserFields, invalidFields } = require("./../utils/validate");
const { createHash, compareHash } = require("./../utils/hashValidate")

// get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.error });
    }
})

// get a particular user from their username
router.get("/:username", getUser, async (req, res) => {
    res.user.password = "";
    res.user.email = "";
    res.send(res.user);
})

router.get("/id/:id", async (req, res) => {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "user not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
    user.password = "";
    user.email = "";
    res.send(user);
});

// create a new user
router.post("/", async (req, res) => {
    const [validUserFields, existBool] = await validateUserFields(
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.formtype
    );
    console.log(validUserFields, existBool, req.body.formtype);
    switch (req.body.formtype) {
        case "signup":
            // signup
            if (
                // runs if the username and email does not exist 
                // and a new user is created
                validUserFields.username
                && validUserFields.email
                && validUserFields.password
                && existBool.username === false
                && existBool.email === false
            ) {
                try {
                    const passwordHash = await createHash(req.body.password);
                    const user = await User.create({
                        "username": req.body.username,
                        "email": req.body.email,
                        "password": passwordHash,
                        "role": req.body.role === "admin" ? "admin" : "user"
                    });
                    const newUser = await user.save();
                    newUser.password = "";
                    return res.status(201).json({
                        user: newUser,
                        message: "user created successfully",
                    });
                } catch (err) {
                    console.error(err);
                    if (existBool.username) {
                        return res.status(400).json({ message: "a user with the username already exists" });
                    } else {
                        return res.status(400).json({ message: "a user with the email already exists" });
                    }
                }
            } else {
                const exitResponse = await invalidFields(
                    validUserFields,
                    existBool,
                    req.body.formtype
                    )
                return res.json(exitResponse);
            }
        case "login":
            // login
            if (
                // runs when the user already exists and wants to login
                validUserFields.username
                && validUserFields.password
                && existBool.username
                && req.body.formtype === "login") {
                const user = await User.findOne({
                    username: req.body.username,
                });
                const validPassword = await compareHash(req.body.password, user.password);
                if (validPassword) {
                    user.password = "";
                    return res.status(200).json({"user":user,"message":"login successful"});
                } else {
                    return res.status(400).json({message:"password is incorrect"})
                }
            } else {
                // explicitly set the email field to be true
                // to ensure that it wont be treated as an error
                existBool.email = true;
                const exitResponse = await invalidFields(
                    validUserFields,
                    existBool,
                    req.body.formtype
                    )
                console.log("exiting", validUserFields, existBool)
                return res.status(400).json(exitResponse);
            }
        default:
            return res.status(400).json({ message: `Please enter a valid formtype field` });
    }
});

// update the category of a user
router.patch("/:username", getUser, async (req, res) => {
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    try {
        const updatedUser = await res.user.save();
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// dekete an existing user
router.delete("/:username", getUser, async (req, res) => {
    try {
        await res.user.deleteOne({ username: req.params.username });
        res.json({ message: "user deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findOne({username:req.params.username})
        .populate("section")
        .populate("thread");
        if (user == null) {
            return res.status(404).json({ message: "user not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "internal server error" });
    }
    res.user = user;
    next()
}


module.exports = router;
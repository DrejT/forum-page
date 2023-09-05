const express = require("express");
const router = express.Router();
const User = require("./../models/user");
const { validateUserFields, invalidFields } = require("./../utils/validate");

// get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.error });
    }
})

// get a particular user
router.get("/:id", getUser, async (req, res) => {
    res.send(res.user);
})

// create a new user
router.post("/", async (req, res) => {
    const [validUserFields, existBool] = await validateUserFields(
        req.body.username,
        req.body.email,
        req.body.password,
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
                    const user = await User.create({
                        "username": req.body.username,
                        "email": req.body.email,
                        "password": req.body.password,
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
                    existBool
                    )
                return res.json(exitResponse);
            }
        case "login":
            // login
            if (
                // runs when the user already exists and wants to login
                validUserFields.username
                && validUserFields.email
                && existBool.username
                && existBool.email
                && req.body.formtype === "login") {
                const user = await User.findOne({
                    username: req.body.username,
                    email: req.body.email
                });
                if (user.password === req.body.password) {
                    user.password = "";
                    return res.status(200).json(user);
                } else {
                    return res.json({ message: "incorrect password" });
                }
                break;
            }
        default:
            
        return res.status(400).json({ message: `Please enter a valid formtype field` });
    }
});

// update the category of a user
router.patch("/:id", getUser, async (req, res) => {
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
router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.deleteOne({ id: req.params.id });
        res.json({ message: "user deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
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
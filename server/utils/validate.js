const User = require('./../models/user')

// fetch a user by id or return err
async function fetchUser(id){
    try {
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw err;
    }
}

// checks if a username already exists in the db
async function existingUsername(username){
    let user;
    try {
        user = await User.findOne({username:username})
        if (user?.username === username){
            return true;
        } else {
            return false;
        }
    } catch (err){
        console.error(err);
    }
}

// checks if the email is already used
async function existingEmail(email){
    try {
        const user = await User.findOne({email:email})
        if (user !== null){
            return true
        } else {
            return false
        }
    } catch (err){
        console.error(err);
    }
}

// validate the username field
async function validateUserName(username){
    if (typeof username !== "string"){
        return false;
    }
    const checkArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "_"];
    const nameArr = username.split("");
    if (username.length > 4 && nameArr.every((el) => checkArr.includes(el))){
        return true;
    } else {
        return false;
    }
}

// validate email field
async function validateEmail(email){
    if (typeof email !== "string"){
        return false;
    }
    const emailRegExp = /^[A-Za-z0-9._%-]+@vcet\.edu\.in$/;
    if (emailRegExp.test(email)){
        return true;
    } else {
        return false;
    }
}

// validate password field
async function validatePassword(password){
    if ( typeof password !== "string"){
        return false;
    }
    if (password.length >= 8){
        return true;
    } else {
        return false
    }
}

async function invalidFields(validUserFields, existBool){
    for (let key in validUserFields) {
        if (validUserFields[key] === false) {
            return { message: `Please enter a valid ${key} field` };
        }
    for (let key in existBool) {
        if (existBool[key] === true) {
            return { message: `a user with the ${key} already exists` };
        }
    }
}

}


async function validateUserFields(username, email, password){
    const usernameBool = await validateUserName(username);
    const emailBool = await validateEmail(email)
    const passwordBool = await validatePassword(password);
    let usernameExistBool, emailExistBool;
    if (usernameBool && emailBool && passwordBool){
        usernameExistBool = await existingUsername(username);
        emailExistBool = await existingEmail(email);
    }
    return [{
        username:usernameBool,
        password:passwordBool,
        email:emailBool,
    }, {
        username:usernameExistBool,
        email:emailExistBool
    }]
}

module.exports = {
    fetchUser,
    validateUserFields,
    invalidFields
}
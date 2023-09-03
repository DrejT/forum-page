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
        return null;
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
    if (password.length > 8){
        return true;
    } else {
        return null
    }
}

async function validateUserFields(username, email, password){
    const usernameBool = await validateUserName(username);
    const emailBool = await validateEmail(email)
    const passwordBool = await validatePassword(password);
    return {
        username:usernameBool,
        password:passwordBool,
        email:emailBool
    }
}

module.exports = {
    fetchUser,
    validateUserFields,
}
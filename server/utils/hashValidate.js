const bcrypt = require('bcrypt');

async function compareHash(plainPassword, hashedPassword){
    return bcrypt.compare(plainPassword, hashedPassword);
}

async function createHash(plainPassword){
    return bcrypt.hash(plainPassword, 10);
}

module.exports = {
    compareHash,
    createHash
}
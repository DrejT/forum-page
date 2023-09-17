const { Section } = require("./../models/section");

async function sectionExists(sectionName){
    const section = await Section.findOne({name:sectionName});
    if (section){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    sectionExists
}
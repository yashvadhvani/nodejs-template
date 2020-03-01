const userSchema = require('../lib/schema/user');

const get = async (notesObj) => {
    return (await (userSchema.find(notesObj)));
}

const addMultiple = async (notesObj) => {
    return (await (userSchema.insertMany(notesObj, { ordered: false })));
}

const update = async (notesObj) => {
    return (await (userSchema.updateOne(notesObj)));
}

const deleteOne = async (notesObj) => {
    return (await (userSchema.deleteOne(notesObj)));
}

module.exports = {
    get,
    addMultiple,
    update,
    deleteOne
}
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const user = new mongoose.model("usersData", userSchema)

module.exports = user
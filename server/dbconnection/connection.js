const mongoose = require("mongoose")

function dbConnection(url) {
    mongoose.connect(url).then(() => {
        console.log("MongoDB Connected ...");
    }).catch((err) => {
        console.log("MongoDB not connected", err);
    })
}

module.exports = dbConnection
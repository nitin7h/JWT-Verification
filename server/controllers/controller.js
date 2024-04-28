const user = require("../models/model")
const { tokenGenrator, verifyToken } = require("../jwt/jwt")

async function registrationFunction(req, res) {

    const { name, email, password } = req.body

    const userAllreadyExist = await user.findOne({ email })

    if (!userAllreadyExist) {
        const newuser = new user({
            name: name,
            email: email,
            password: password,
        })

        newuser.save()
        res.send({ message: "Data Posted Succesfully" })
    } else {
        res.send({ message: "User Already Exist " })
    }
}


async function loginFunction(req, res) {
    const { email, password } = req.body
    const userExist = await user.findOne({ email, password })

    const token = tokenGenrator(userExist)

    if (!userExist) {
        res.send({ message: "Invalid Email or Password" })
    }

    if (userExist) {
        console.log("token : ", token);
        return res.send({ message: "Succesfully login", token })

    }
}

async function verifyFunction(req, res) {
    // Access req.userId to get the user ID
    res.status(200).send("You're authenticated!");
}



module.exports = { loginFunction, registrationFunction, verifyFunction }
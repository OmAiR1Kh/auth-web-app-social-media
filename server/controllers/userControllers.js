const sendMail = require('../helpers/sendMail')
const createToken = require('../helpers/createToken')
const validateEmail = require('../helpers/validateEmail')
const bcrypt = require('bcryptjs')
const User = require('../models/userModels')

const userController = {
    register: async (req, res) => {
        try{
            // get info
            const {name, email, password} = req.body

            // check fiels
            if (!name || !email || !password) return ((res.status(400).json({msg: 'Please fill in all fields'})))

            // check email
            if(!validateEmail(email)) return res.status(400).json({msg: 'Please enter a valid email address'})

            // check user
            // const user = await User.find({email})
            // if(user) return res.status(400).json({msg: 'This email is already registered in our system'})

            // check password
            if(password.length<6) return res.status(400).json({msg: 'Password must be at least 6 characters'})

            // hash password
            const salt = await bcrypt.genSalt()
            const hashPassword = await bcrypt.hash(password, salt)

            // create token
            const newUser = {name, email, password: hashPassword}
            const activation_token = createToken.activation(newUser)

            // send email
            const url = `http://localhost:3000/api/auth/activate/${activation_token}`
            sendMail.sendEmailRegister(email, url, 'Verify your email')

            // registration success
            res.status(200).json({msg: 'Welcome, Please check your Email'})
        } catch (err) {
            res.status(500).json({msg:err.message})
        }
    }
}

module.exports = userController;
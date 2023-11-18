const {Schema, model} = require('mongoose')

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'please enter your name'],
            trim: true
        },
        email:{
            type: String,
            required: [true, 'please enter your email'],
            trim: true,
            unique: true
        },
        password:{
            type: String,
            required: [true, 'please enter your password'],
            min: 6
        },
        avatar:{
            type: String,
            default: ''
        }
    },
    {timestamp: false},
)

const User = model("User", userSchema)

module.exports = User;

const bcrypt = require('bcryptjs');
const Admin = require('../model/adminModel');
const User = require('../model/userModel');
const Tractor = require('../model/tractorModel');



const getUser = async (req, res) => {
    
    try {
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password){
            return res.status(404).json({
                success: false,
                msg:'Please add email and password'
            })
        }

        Admin.findOne({email: email}, (err, user) => {
            if (!user) {
                return res.status(404).json({
                    success:false,
                    msg:'Invalid Email or Password'
                })
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (isMatch) {
                    return res.status(200).json({
                        success:true,
                        msg:'Login Successfull'
                    })

                }else{
                    return res.status(404).json({
                        success:false,
                        msg:'Invalid Email or Password'
                    })
                }
            })
        })
        
        
    } catch (err) {
         
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
        
    }

}


const  getTractor  = async (req, res) => {

    try {
        const tractors = await Tractor.find({})

        res.status(200).json(tractors)

        
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }

}


const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({}).select("-password")

        res.status(200).json(users)

        
    } catch (err) {
        
        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
    }

}


module.exports = {
    getUser,
    getAllUsers,
    getTractor
}
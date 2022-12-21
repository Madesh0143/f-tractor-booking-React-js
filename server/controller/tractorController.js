const Tractor = require('../model/tractorModel');



const add = (req, res) => {
    
    try {
        const { firstname, lastname, email, phone_no,nametractor, address, tractor_count, date_time, description } = req.body

        if(!firstname || !lastname || !email || !phone_no ||!nametractor ||!address || !tractor_count || !date_time || !description){
            return res.status(404).json({
                success: false,
                msg:'Please add all the fields'
            })
        }

        const newOne = new Tractor({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone_no: phone_no,
            nametractor:nametractor,
            address: address,
            tractor_count: tractor_count,
            date_time: date_time,
            description: description
        })

        newOne.save();

        res.status(201).json({
            success: true,
            msg: "added"
        })
        
    } catch (err) {

        return res.status(500).json({
            success: false,
            msg: "Internal server error"
        })
        
    }

}

module.exports = {
    add
}
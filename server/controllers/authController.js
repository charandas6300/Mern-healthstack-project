const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        const { firstname, lastname, username, 
            email, password, confirmPassword, 
            usertype, pincode, phone, address,
            cart, status, transaction, products } = req.body;
        const usernameCheck = await User.findOne({username});
        if(usernameCheck)
            return res.json({ msg: "Username already exists", status: false });
        const emailCheck = await User.findOne({email});
        if(emailCheck)
            return res.json({ msg: "Email already exists", status: false });
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
            usertype,
            pincode,
            phone,
            address,
            status,
            transaction,
            cart,
            products,
        })
        delete user.password;
        return res.json({status: true, user });
    }
    catch(err){
        next(err)
    }
}

module.exports.login = async (req, res, next) => {
    try{
        const {username, email, password, usertype} = req.body;
        const usernameCheck = await User.findOne({username})
        if(!usernameCheck)
            return res.json({ msg: "Invalid username", status: false });
        const emailCheck = await User.findOne({email})
        if(!emailCheck)
            return res.json({ msg: "Invalid email", status: false });
        const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
        if(!passwordCheck)
            return res.json({ msg: "Invalid password", status: false });
        delete usernameCheck.password;
        return res.json({status: true, user: usernameCheck});
    }
    catch(err){
        next(err)
    }
}
const {Router} = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require ( 'express-validator' )
const user = require('../models/user')

router.post
('register',[
    check ('email', 'sxal parol').isEmail(),
    check ( 'password', ' minimum 6 nshan')
        .isLength({ min: 6})
]);
 async function s(req,res) {
    try {
        const  errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: ' sxal parol'
            })
        const{email, password }= req.body
        const condidate =await  User.findOne({email})
        if(condidate){
            return res.status(400).json({ message: ' chka tenc parol' })
        }

        const  hashedPassword = await bcrypt.hash( password,12)
        const  user = new User(
            { email: email, password: hashedPassword}
        )
        await user.save()
        res.status(201).json({ message: 'polzovotel sozdan'})
    }

    res.send("bob")
} catch (err) {

    }}




module.exports = router

const User = require('../../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function create(req,res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }

}

async function login(req,res){
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
      } catch {
        res.status(400).json('Bad Credentials');
      }
}

async function checkToken(req,res){
    console.log(req.user);
    res.json(req.exp)
}

// Helper funtion to create jwt tolen
function createJWT(user){
    return jwt.sign({user},process.env.SECRET,{expiresIn: '24H'})
}

module.exports = {create,login, checkToken}
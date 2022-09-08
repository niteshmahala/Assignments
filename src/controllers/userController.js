const User = require('../models/userModel');

const createUser = async (req, res) => {
    let data = req.body;
    let responseData = await User.create(data);
    res.status(201).send({data: responseData})
}
const customer = require('../models/customerModel');

const createcustomer = async (req, res) => {
    let data = req.body;
    let responseData = await customer.create(data);
    res.status(201).send({data: responseData})
}
module.exports = { createcustomer };
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// GET: list
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message: "AN error occured:", error: error });
    }
});

// GET: by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const savedCustomers = await Customer.findOne({_id: id});
        res.status(200).json(savedCustomers);
    }
    catch (error) {
        res.status(500).json({ message: "AN error occured:", error: error });
    }
});

// POST: create
router.post('/', async (req, res) => {
    try {
        const customer = new Customer(req.body);
        const savedCustomer = customer.save();

        res.status(200).json(savedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "AN error occured:", error: error });
    }
});

// PUT: update
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = req.body;
        const updatedCustomer = await Customer.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: customer
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});


// DELETE: delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let deletedCustomer  = await Customer.deleteOne({_id: id});

        res.status(200).json(deletedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "AN error occured:", error: error });
    }
});

module.exports = router;
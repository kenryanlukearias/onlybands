require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Customer = require('../models/Customer');

const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403);
        req.user = payload;
        next();
    });
}   

router.post('/register', async (req, res) => {
    const { name, email, phone, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Customer({ name, email, phone, username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        res.status(400).json({ error: 'Username already exists' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Customer.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

router.use(authenticateToken);

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
        const savedCustomer = await customer.save();

        res.status(200).json(savedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured:", error: error });
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
        res.status(500).json({ message: "An error occured:", error: error });
    }
});

module.exports = router;
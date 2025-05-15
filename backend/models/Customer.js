const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },

        // more can be added, depending on what we need
    }
)

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

// enable CORS
app.use(cors());

// enable JSON parsing
app.use(express.json());

// route the customer api
const customerRoutes = require('./routes/customers');

// use the route
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to OnlyBands!');
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is successfully listening on port:", PORT);
    else
        console.error("Error occured:", error);
});

main().catch((error) => console.log(error));

async function main() {
    // prepare connection string
    const connectionString = "mongodb+srv://studyholicprocrastinator:LY054Tho2dvCnPEC@cluster0.eat16.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}


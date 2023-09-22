const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes and  their mounting
const blog = require('./routes/blog');
// mouting
app.use('/api/v1', blog);

const connectWithDb = require('./config/database');
const res = require('express/lib/response');
connectWithDb();

// Starting the server
app.listen(PORT, () => {
    console.log(`App is started as ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(`<h1>This is Homepage</h1>`)
})
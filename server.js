const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const routes = require('./src/routes'); // Assuming your router file is named 'routes.js'


// Replace with your actual MySQL connection details
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tanvi123',
    database: 'test'
});

const app = express();

// Configure body parser middleware
app.use(bodyParser.json());

// Connect to the MySQL database (replace with error handling)
pool.getConnection()
    .then(connection => {
        global.connection = connection;
        console.log('Connected to MySQL database');
    })
    .catch(err => {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit the process on error
    });

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

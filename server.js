
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Serve static assets from a "public" folder if needed
app.use(express.static(path.join(__dirname, 'public')));

// Root route returning a status response
app.get('/', (req, res) => {
    res.json({ status: "running" });
});

// Example route demonstrating path resolution for an HTML file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start listening on the designated port
app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});

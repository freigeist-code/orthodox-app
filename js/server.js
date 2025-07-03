// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Use native fetch in Node 18+, or require('node-fetch') for older Node
let fetch;
try {
    fetch = global.fetch || require('node-fetch');
} catch (e) {
    fetch = require('node-fetch');
}

app.use(cors());

// Proxy endpoint for OCA API
// Expects date as YYYY-MM-DD, converts to /api/gregorian/YYYY/MM/DD/
app.get('/api/oca/:date', async (req, res) => {
    const [year, month, day] = req.params.date.split('-');
    // Remove leading zeros for month/day
    const url = `https://orthocal.info/api/gregorian/${parseInt(year)}/${parseInt(month)}/${parseInt(day)}/`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: "Upstream error" });
        }
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("Proxy error:", err);
        res.status(500).json({ error: "Proxy error" });
    }
});

// Serve static files (index.html, prayers.html, styles.css, js/*)
app.use(express.static('.'));

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/api/oca/2025-07-02`);
});


const express = require('express');
const path = require('path');
const app = express();

const FRONTEND_DIR = process.env.NODE_ENV === 'production' ? path.join(__dirname, 'dist') : path.join(__dirname, 'frontend');

app.use(express.static(FRONTEND_DIR));

app.get('/', (req, res) => {
    res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Frontend served at http://localhost:' + PORT);
});
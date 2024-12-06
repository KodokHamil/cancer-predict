const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder src
app.use('/src/styles', express.static(path.join(__dirname, 'src/styles')));
app.use('/src/scripts', express.static(path.join(__dirname, 'src/scripts')));
app.use('/src/images', express.static(path.join(__dirname, 'src/images')));

// Menyajikan file favicon
app.use('/favicon.png', express.static(path.join(__dirname, 'favicon.png')));

// Menyajikan index.html dari root folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server berjalan di port yang ditentukan
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Frontend server running on http://localhost:${PORT}`);
});

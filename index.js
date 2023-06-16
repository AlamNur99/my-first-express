const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use(router); // Gunakan middleware router

app.listen(port, () => {
    console.log(`Aplikasi contoh sedang mendengarkan pada port ${port}`);
});
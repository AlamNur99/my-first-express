const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('Hello World!');
});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;

    if (Number(id) === 1) {
        const user = {
            id: 1,
            name: 'John Doe',
        };
        res.send(user);
    } else {
        const user = {
            id: 2,
            name: 'alam',
        };
        res.send(user);
    }
});

router.post('/user', function (req, res) {
    res.send('Got a post');
});

router.put('/user', function (req, res) {
    res.send('Got a put');
});

router.delete('/user', function (req, res) {
    res.send('Got a delete');
});

module.exports = router;
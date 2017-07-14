const express = require('express');
const router = express.Router();

router.use('/users', (req, res) => {
    res.json({ users: ['jeremy', 'david' ]});
});

router.use('/products', (req, res) => {
    const p = [
        {"id": 1, "title": "David", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
    ];
    res.json({ products: p });
});


module.exports = router;

const express = require('express');
const router = express.Router();

const userRoute = require('./user-route');
router.use('/user', userRoute);

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to my API"
    });
});

module.exports = router;
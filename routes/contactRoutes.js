const express = require("express");
const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({
        message: "get cont"
    })
})
router.route('/:id').get((req, res) => {
    res.status(200).json({
        message: `get  ${req.params.id}`
    })
})
router.route('/').post((req, res) => {
    res.status(200).json({
        message: "create"
    })
})
router.route('/:id').put((req, res) => {
    res.status(200).json({
        message: `update ${req.params.id}`
    })
})
router.route('/:id').delete((req, res) => {
    res.status(200).json({
        message: `remove  ${req.params.id}`
    })
})

module.exports = router;
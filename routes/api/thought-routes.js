const router = require('express').Router();
const { thought } = require('../../models')

router.get('/', async (req, res) => {
    const allThoughts = await thought.find({})
    res.json(allThoughts)
})

router.post('/', async (req, res) => {
    const newThought = await thought.create(req.body)
    console.log(newThought)
    res.send("New thought")
})

module.exports = router;
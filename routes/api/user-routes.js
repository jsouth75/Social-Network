const router = require('express').Router();
const { user } = require('../../models')

router.get('/', async (req, res) => {
    const allUsers = await user.find({})
    res.json(allUsers)
})

router.post('/', async (req, res) => {
    const newUser = await user.create(req.body)
    console.log(newUser)
    res.send("made a new one")
})

module.exports = router;
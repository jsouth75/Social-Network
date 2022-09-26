const router = require('express').Router();
const { thought } = require('../../models')

// Get all thoughts
router.get('/', async (req, res) => {
    const allThoughts = await thought.find(req.body)
    res.json(allThoughts)
})

// Get thought by Id
router.get('/:thoughtId', async (req, res) => {
    const thoughtById = await thought.findOne(req.body)
    res.json(thoughtById)
})

// Create New thought
router.post('/', async (req, res) => {
    const createNewThought = await thought.create(req.body)
    console.log(createNewThought)
    res.send("New thought")
})

// Update Thought
router.put('/:thoughtId', async (req, res) => {
    const updateThought = await thought.findOneAndUpdate(req.body)
    console.log(updateThought)
    res.send("Updated thought")
})

// Delete Thought
router.delete('/:thoughtId', async (req, res) => {
    const thoughtById = await thought.findOneAndDelete(req.body)
    console.log(thoughtById)
    res.send("Thought deleted")
})

// Create Reaction 
router.post('/:thoughtId/reactions', async (req, res) => {
    const createReaction = await thought.findOneAndUpdate(req.body)
    console.log(createReaction)
    res.send("New Reaction")
})

// Delete Reaction
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    const reactionById = await thought.findOneAndDelete(req.body)
    console.log(reactionById)
    res.send("Reaction deleted")
})

module.exports = router;
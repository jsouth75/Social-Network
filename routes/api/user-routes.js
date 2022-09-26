const router = require('express').Router();
const { user } = require('../../models')

// Get all users
router.get('/', async (req, res) => {
    const allUsers = await user.find(req.body)
    res.json(allUsers)
})

// Get User by Id
router.get('/:userId', async (req, res) => {
    const userById = await user.findOne(req.body)
    res.json(userById)
})

// Create New User
router.post('/', async (req, res) => {
    const newUser = await user.create(req.body)
    console.log(newUser)
    res.send("New user created")
})

// Update User
router.put('/:userId', async (req, res) => {
    const updateUser = await user.findOneAndUpdate(req.body)
    console.log(updateUser)
    res.send("User updated")
})

// Delete User
router.delete('/:userId', async (req, res) => {
    const deleteUser = await user.findOneAndDelete(req.body)
    console.log(deleteUser)
    res.send("User deleted")
})

// Create Friend
router.post('/:userId/friends/:friendId', async (req, res) => {
    const newFriend = await user.findOneAndUpdate(req.body)
    console.log(newFriend)
    res.send("New friend added to user's friend list")
})

// Delete Friend
router.delete('/:userId/friends/:friendId', async (req, res) => {
    const deleteFriend = await user.findOneAndDelete
    (req.body)
    console.log(deleteFriend)
    res.send("Friend removed from user's friend list")
})

module.exports = router;
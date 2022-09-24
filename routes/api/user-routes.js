const router = require('express').Router();
const { user } = require('../../models')

router.get('/', async (req, res) => {
    const allUsers = await user.find({})
    res.json(allUsers)
})

router.get('/:userId',async (req, res) => {
    const userById = await user.findById
    res.json(userById)
})

router.post('/', async (req, res) => {
    const newUser = await user.create(req.body)
    console.log(newUser)
    res.send("New user created")
})

router.put('/:userId', async (req, res) => {
    const updateUser = await user.updateUser(req.body)
    console.log(updateUser)
    res.send("User updated")
})

router.delete('/:userId', async (req, res) => {
    const deleteUser = await user.delelteUser(req.body)
    console.log(deleteUser)
    res.send("User deleted")
})

router.get('/:userId/friends/:friendId', async (req, res) => {
    const newFriend = await user.findOneAndUpdate
    (req.body)
    console.log(newFriend)
    res.send("New friend added to user's friend list")
})

router.delete('/:userId/friends/:friendId', async (req, res) => {
    const deleteFriend = await user.delelteUser(req.body)
    console.log(deleteFriend)
    res.send("Friend removed from user's friend list")
})

module.exports = router;
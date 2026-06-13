const express = require('express')
const router = express.Router()
const { addUser, getUsers, deleteUser } = require('../controllers/usercontroller')

/**
 * POST -> Add Users
 */
router.post("/", addUser)

/**
 * GET -> Fetch Users
 */
router.get("/", getUsers)

/**
 * DELETE -> Delete Users
 */
router.delete("/:id", deleteUser)

module.exports = router;
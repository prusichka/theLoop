const { Router } = require("express");
const User = require("../models/User");
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcrypt')
const router = Router()

// api/auth/register
router.post('/register', [
  check('email', 'Incorrect value').isEmail(),
  check('password', 'Incorrect password').isLength({ min: 6 }),
],
  async (req, res) => {
    try {

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(404).json({
          errors: errors.array(),
          message: 'Incorrect data'
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'User exist' })
      }

      const hashedPassword = await bcrypt.hash(password, 100)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      res.status(201).json({ message: 'User create' })

    } catch (error) {
      res.status(500).json({ message: "Something wrong" })
    }
  })

// api/auth/login
router.post('/login',
  async (req, res) => {
    try {

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(404).json({
          errors: errors.array(),
          message: 'Incorrect login information'
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'User not found' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Wrong password' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })

    } catch (error) {
      res.status(500).json({ message: "Something wrong" })
    }
  }
)

module.exports = router


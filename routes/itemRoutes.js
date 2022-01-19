const { Router } = require('express');
const Item = require('../models/Item')
const auth = require('../middleware/authMiddleware')
const config = require('config')

const router = Router()

// router.post('/generate', auth, async (req, res) => {
//   try {
//     const baseUrl = config.get('baseUrl')
//     const { title } = req.body

//     const existing = await Item.findOne({ title})

//     if (existing) {
//       return res.json({title: existing})
//     }

//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

router.get('/', auth, async (req, res) => {
  try {
    const items = await Item.find({ owner: req.user.userId })
    res.json(items)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById({ owner: req.params.id })
    res.json(item)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
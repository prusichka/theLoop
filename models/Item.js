const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  sales: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  new: { type: Boolean, required: true },
  description: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: "User" }
})

module.exports = model("Item", schema)
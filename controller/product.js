const Product = require('../models/product')
const slugify = require('slugify')

exports.create = async(req,res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title)
    const newProduct = await new Product(req.body).save()
    res.json(newProduct)
  } catch (error) {
    console.log(error);
    // res.status(400).send('Create product failed!')
    res.status(400).json({
      error:error.message,
    })
  }
}

exports.read = async(req,res) => {
  const products = await Product.find({}) // .populate('category')
  res.json(products)
}

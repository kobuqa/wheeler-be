exports.getProducts = (req, res) => {
    res.render('products')
}

exports.createProduct = (req, res) => {
    console.log(req.body)
    res.redirect('/')
}
const { v4: uuid } = require('uuid');

let products = [];

// READ all products
const fetchProducts = (req, res) => {
  const product = req.body;
  console.log(`READ Products in the database`); 
  res.send(products);
};

// READ one products
const fetchOneProduct = (req, res) => {
  const { id } = req.params;

  const oneProduct = products.find((product) => product.id == id);
  res.send(oneProduct); 
  console.log("READ ONE ", req.params);
};

// CREATE one product
const createProduct = (req, res) => {   
  const product = req.body;
  products.push({...product, id: uuid()});
  console.log(`CREATE Product [${product.name}] added to the database.`);
};

// UPDATE one product
const updateProduct =  (req,res) => {
  const product = products.find((product) =>  product.id === req.params.id);
  
  product.name = req.body.name;
  product.price = req.body.price;

  console.log(`UPDATE Product name has been updated to ${req.body.name}. Price has been updated to ${req.body.price}.`)
};

// DELETE one product
const deleteProduct = (req, res) => { 

  products = products.filter((product) => product.id !== req.params.id);
  console.log(`DELETE product with id ${req.params.id} has been deleted`);

};


module.exports = { fetchProducts, fetchOneProduct, createProduct, updateProduct, deleteProduct };
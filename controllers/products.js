const { v4: uuidv4 } = require('uuid');

let products = [
  {
    name: "keyboard",
    price: 29
  },
  {
    name: "screen",
    price: 149
  }
];

const fetchProducts = (req, res) => {
  console.log(products);
  res.send(products);
};

const fetchOneProduct = (req, res) => {
  res.send(req.params.id)
  console.log("hello");
};

const createProduct = (req, res) => {   
  const product = req.body;
  products.push({...user, id: uuid()});
  
  console.log(`Product [${product.name}] added to the database.`);
};

const updateProduct =  (req,res) => {
  const product = products.find((product) => product.id === req.params.id);
  
  product.name = req.body.name;
  product.price = req.body.price;

  console.log(`username has been updated to ${req.body.username}.price has been updated to ${req.body.price}`)
};

const deleteProduct = (req, res) => { 
  console.log(`product with id ${req.params.id} has been deleted`);
  
  products = users.filter((user) => user.id !== req.params.id);
};

module.exports = { fetchProducts, fetchOneProduct, createProduct, updateProduct, deleteProduct };
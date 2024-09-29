import express from 'express';
import shopControllers from '../controllers/shop.js';

const router = express.Router();
const { getAllProducts, getProductById, getAddProductForm, addProduct } =
    shopControllers;

// router.get('/products', (req, res) => {
//     res.render('layout', { title: 'Products', body: 'includes/products' });
// });

router.get('/products',getAllProducts );

router.get('/products/:id',getProductById );

// per dare il form
router.get('/add-product', getAddProductForm);

// per aggiungere il prodotto
router.post('/add-product',addProduct );


export default router;

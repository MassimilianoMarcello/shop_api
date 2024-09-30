import express from 'express';
import shopControllers from '../controllers/shop.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
const { getAllProducts, getProductById, getAddProductForm, addProduct } =
    shopControllers;



router.get('/products',getAllProducts );

router.get('/products/:id',getProductById );

// give a form to add prodicts
router.get('/add-product', getAddProductForm);

// add a product
router.post('/add-product',addProduct );


export default router;

import Shop from '../models/shop.js';

const shopControllers = {
    getAllProducts: (req, res) => {
        const products = Shop.getAll();
        const token = req.cookies.token;
        res.status(200).render('layout', {
            title: 'Products',
            body: 'includes/products', // Body included product page
            products,
            token
        });
    },

    getProductById: (req, res) => {
        const productId = req.params.id;
        const product = Shop.getById(productId); 
        if (!product) {
            return res
                .status(404)
                .render('404', {
                    title: 'Product Not Found',
                    message: 'Il prodotto non è stato trovato.'
                });
        }
        res.render('layout', {
            title: product.nome, // Set the page title using the name of the product
            body: 'includes/product', // Include page of single product
            product // Passes product details
        });
    },
    getAddProductForm: (req, res) => {
        const token = req.cookies.token;
        res.render('layout', {
            token,
            title: 'Add Product', // Page title
            body: 'includes/addProductForm' // Includes the adding form
        });
    },
    addProduct: (req, res) => {
        const { nome, prezzo, descrizione, immagine } = req.body; // Estract data from form
        const newProduct = {
            nome,
            prezzo: parseFloat(prezzo),
            descrizione,
            immagine
        };

        Shop.Add(newProduct); // Add a new product
        res.redirect('/api/products'); // redirect to all products
    }
};

export default shopControllers;

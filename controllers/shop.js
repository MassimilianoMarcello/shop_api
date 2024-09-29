import Shop from '../models/shop.js';


const shopControllers ={
    getAllProducts: (req, res) => {
        const products = Shop.getAll();
        res.status(200).render('layout', { // Rendi il layout principale
            title: 'Products', // Puoi personalizzare il titolo
            body: 'includes/products', // Corpo che include la pagina dei prodotti
            products // Passa l'array di prodotti
        });
    },
    
    getProductById:(req, res) => {
        const productId = req.params.id;
        const product = Shop.getById(productId);  // Supponiamo che Shop.getById recuperi il prodotto
        if (!product) {
            return res.status(404).render('404', { title: 'Product Not Found', message: 'Il prodotto non è stato trovato.' });
        }
        res.render('layout', {
            title: product.nome, // Imposta il titolo della pagina con il nome del prodotto
            body: 'includes/product', // Include la vista del singolo prodotto
            product // Passa i dettagli del prodotto
        });
    },
    getAddProductForm:(req,res)=>{
        res.render('layout', {
            title: 'Add Product', // Titolo della pagina
            body: 'includes/addProductForm'  // Indica la vista del form da includere
        });
    },
    addProduct: (req, res) => {
        const { nome, prezzo, descrizione, immagine } = req.body; // Estrai i dati dal form
        const newProduct = {
            nome,
            prezzo: parseFloat(prezzo),
            descrizione,
            immagine
        };
        
        Shop.Add(newProduct); // Aggiungi il nuovo prodotto
        res.redirect('/api/products'); // Reindirizza alla lista dei prodotti
    }

}

export default shopControllers
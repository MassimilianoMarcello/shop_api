import {v4 as Id} from 'uuid';


const products = [
    {
        id:Id(),
        nome: 'iPhone 16',
        prezzo: 999.99,
        descrizione: 'iPhone 14 con display Super Retina XDR, fotocamera a doppia lente e chip A15 Bionic.',
        immagine: 'https://www.lab9.be/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_PDP_Image_Position_1__en-WW.jpg?v=1725977324&width=823'  
    },
    {
        id:Id(),
        nome: 'Samsung Galaxy S22',
        prezzo: 849.99,
        descrizione: 'Samsung Galaxy S22 con display Dynamic AMOLED, fotocamera tripla e processore Snapdragon 888.',
        immagine: 'https://cdn.webshopapp.com/shops/117930/files/423201911/650x650x2/samsung-galaxy-s23-128gb-zwart-5g.jpg'  
    },
    {
        id:Id(),
        nome: 'Google Pixel 7',
        prezzo: 599.99,
        descrizione: 'Google Pixel 7 con Google Tensor, fotocamera principale da 50 MP e design elegante.',
        immagine: 'https://www.wirelessplace.com/cdn/shop/products/n-GTmKk_yj1Q_VKELf3sh8rbthwnuJFMhbahiaqHrH-5Yym58DpM5Z91IbqSrXves6HnzBLFpcd8-siSqDmxBceZQqNOheuq81aBRxRjhitHEcFxv4xB6CBljAJm-tde_tVpFQ_s415-c_dd38ac6f-67a8-4a08-9171-dae3623eae8c_600x600.png?v=1670941550'  
    },
    {
        id:Id(),
        nome: 'OnePlus 10 Pro',
        prezzo: 899.99,
        descrizione: 'OnePlus 10 Pro con display Fluid AMOLED, sistema di fotocamere Hasselblad e ricarica rapida.',
        immagine: 'https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0317/EU-IN_Black.png'  
    }
];


class Shop {

    static getAll(){
        return products
    }

    static getById(id){
        return products.find( product=> {return product.id === id})

    }

    static Add(product){
        const newProduct={
            id:Id(),
            ...product}
            products.push(newProduct)
            return product
        }
    }

export default Shop

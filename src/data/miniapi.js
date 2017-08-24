function Api() {
    this._data = {
        categories: [
            {
                key: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://unareceta.com/wp-content/uploads/2016/10/ensaladas.jpg'
            },
            {
                key: 2,
                name_en: 'Pizza',
                name_es: 'Pizza',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://pizzaamericana.co/img/0147/343.jpg'
            },
            {
                key: 3,
                name_en: 'Spanish Food',
                name_es: 'Comida Espa',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://www.open.edu/openlearn/ocw/pluginfile.php/775611/mod_resource/content/0/l194_2_cover_image_1%20%281%29.jpg'
            }
        ],
        products: [
            {
                key: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'http://cdn2.salud180.com/sites/default/files/styles/gallerie/public/field/image/2014/01/comida_chatarra_mas_danina.jpg.jpg',
                category: 1,
                usd_price: 5.00,
                cop_price: 12000
            },
            {
                key: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'http://cdn2.salud180.com/sites/default/files/styles/gallerie/public/field/image/2014/01/comida_chatarra_mas_danina.jpg.jpg',
                category: 2,
                usd_price: 5.00,
                cop_price: 12000
            },
            {
                key: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'http://cdn2.salud180.com/sites/default/files/styles/gallerie/public/field/image/2014/01/comida_chatarra_mas_danina.jpg.jpg',
                category: 3,
                usd_price: 5.00,
                cop_price: 12000
            }
        ]
    }

    this.getProducts = function() {
        return this._data.products;
    }

    this.getCategories = function() {
        return this._data.categories;
    }
}

module.exports = new Api();
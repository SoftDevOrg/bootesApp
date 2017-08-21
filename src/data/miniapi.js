function Api() {
    this._data = {
        categories: [
            {
                id: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://lunagrill.com/wp-content/uploads/2015/08/Salads-Greek.jpg'
            },
            {
                id: 2,
                name_en: 'Pizza',
                name_es: 'Pizza',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'http://palermos67.com/wp-content/uploads/2017/07/free-pizza-for-a-year.jpg'
            },
            {
                id: 3,
                name_en: 'Spanish Food',
                name_es: 'Comida Espa',
                description_en: 'The Italian Way',
                description_es: 'The Italian Way',
                imageUrl: 'https://image.afcdn.com/story/20150820/-743004_w767h767c1cx511cy250.jpg'
            }
        ],
        products: [
            {
                id: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://lunagrill.com/wp-content/uploads/2015/08/Salads-Greek.jpg',
                category: 1,
                usd_price: 5.00,
                cop_price: 12000
            },
            {
                id: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://lunagrill.com/wp-content/uploads/2015/08/Salads-Greek.jpg',
                category: 2,
                usd_price: 5.00,
                cop_price: 12000
            },
            {
                id: 1,
                name_en: 'Salads',
                name_es: 'Ensaladas',
                description_en: 'Fresh and Healthy',
                description_es: 'Fresco y Saludable',
                imageUrl: 'https://lunagrill.com/wp-content/uploads/2015/08/Salads-Greek.jpg',
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
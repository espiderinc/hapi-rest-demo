"use strict";

var productController = require('../controllers/product');


module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/products/{product_id}',
            handler: productController.findByID
        },
         {
             method: 'GET',
             path: '/products/title/{title}',
             handler: productController.findByName
        },
        {
            method: 'GET',
            path: '/products',
            handler: productController.find
        }
    ];
}();

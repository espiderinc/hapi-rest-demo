"use strict";

var productDAO = require('../dao/product');

function ProductController(){};
ProductController.prototype = (function(){

	return {
		findByID: function findByID(request, reply) {

			var params = request.params;

			productDAO.findByID(params, function (err, data) {
				if(err) {
                    console.log(err);
                    return reply(err);
                }
				reply(data.rows);
			});
		},
		find: function find(request, reply) {

			var params = request.query;

			productDAO.find(params, function (err, data) {
				if(err) {
					console.log(err);
					return reply(err);
				}
				reply(data.rows);
			});
		}
	}
})();

var productController = new ProductController();
module.exports = productController;
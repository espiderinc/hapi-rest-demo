"use strict";

var db = require('../middleware/db');

function productDAO(){};
productDAO.prototype = (function(){

	return {
		 findByName: function findByName(params, callback) {
        
		 	var values = [
		 		params.title
		 	];
        
		 	var sql = "select * from products"+
		 		" where title = $1::varchar";
        
		 	db.query({
		 		sql : sql,
		 		values: values,
		 		callback : callback
		 	})
		 },
		findByID: function findByID(params, callback) {

			var values = [
				params.product_id
			];

			var sql = "select * from products"+
					" where prod_id = $1::int";

			db.query({
				sql : sql, 
				values: values,
				callback : callback
			});
		},
		find: function find(params, callback) {

			var values = [
			];

			var sql = "select * from products";

			db.query({
				sql : sql, 
				values: values,
				callback : callback
			});
		}
	};
})();

var productDAO = new productDAO();
module.exports = productDAO;

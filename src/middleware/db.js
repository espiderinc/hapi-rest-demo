"use strict";

var pg = require('pg');
var constants = require('../config/constants.js');

module.exports = function () {

    var externals = {};

    var connString = "postgres://" + constants.database.user + ":" + constants.database.password + "@" + constants.database.host + "/" + constants.database.database;

    externals.query = function (params) {
        var sql = params.sql;
        var values = params.values;
        var queryHandler = params.callback;
        pg.connect(connString, function (err, connection, done) {
            if (err) return queryHandler(err, null);
            connection.query(sql, values, function (err, rows) {
                done();
                if (err) return queryHandler(err, null);
                queryHandler(err, rows);
            });
        });
    };

    return externals;
}();
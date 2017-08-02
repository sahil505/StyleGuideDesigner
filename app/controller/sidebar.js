'use strict';

var layer = require('../models/sidebar');

var sidebar = module.exports = {};

sidebar.get = function () {
	return layer.set();
};

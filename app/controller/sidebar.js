'use strict';

var layer = require('../models/sidebar');

var sidebar = module.exports = {};

sidebar.get = function () {
	var layers = layer.getLayers();
	layer.get(layers[0]);
	
	return layers;
};

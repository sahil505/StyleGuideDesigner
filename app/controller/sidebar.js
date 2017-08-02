'use strict';

var model = require('../models/sidebar');

var sidebar = module.exports = {};

sidebar.get = function () {
	return model.getLayers();
};

var Dispatcher = require('flux').Dispatcher;

// Create a dispatcher instance
var AppDispatcher = new Dispatcher();

// Convenience methods to handle dispatch requests
AppDispatcher.handleAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
}

module.exports = AppDispatcher;
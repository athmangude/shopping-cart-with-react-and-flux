var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define actions object
var FluxCartConstants = {
    // Receive intial product data
    ReceiveProduct: function(data){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.RECEIVE_DATA,
            data: data
        });
    },

    // set currently selected product variation
    selectProduct: function(index){
    	AppDispatcher.handleAction({
    		actionType: FluxCartConstants.SELECT_PRODUCT,
    		data: index
    	});
    },

    // Add item to cart
    addToCart: function(sku, update){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_ADD,
            sku: sku,
            update: update
        });
    },

    // remove item to cart
    removeFromCart: function(sku){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_REMOVE,
            sku: sku
        });
    },

    // update cart visibility status
    updateCartVisible: function(cartVisible){
        AppDispatcher.handleAction({
            actionType: FluxCartConstants.CART_VISIBLE,
            cartVisible: cartVisible
        });
    }
};

module.exports = FluxCartActions;

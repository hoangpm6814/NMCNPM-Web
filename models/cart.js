module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id,Quantity) {
        var cartItem = this.items[id];
       
        if (!cartItem) {
            cartItem = this.items[id] = {id: id, quantity: 0, price: 0};
        }
       
        cartItem.quantity=parseInt(cartItem.quantity)+parseInt(Quantity);
        cartItem.price =parseInt(cartItem.price)+ parseInt(item.price) * parseInt(Quantity);
        this.totalItems=parseInt(Quantity)+parseInt(this.totalItems);
        this.totalPrice = parseInt(item.price) * parseInt(Quantity)+parseInt(this.totalPrice);
        
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
    
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
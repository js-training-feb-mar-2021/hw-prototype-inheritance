
function Hamburger(size, stuffing) {
    this.size = size.size;
    this.stuffing = stuffing.stuffing;
    this.price = size.price + stuffing.price;
    this.calories = size.calories + stuffing.calories;
}

Hamburger.SIZE_SMALL = { size :'small', price : 50, calories : 20};
Hamburger.SIZE_LARGE = { size :'large', price : 100, calories : 40};
Hamburger.STUFFING_CHEESE = { stuffing :'cheese', price : 10, calories : 20};
Hamburger.STUFFING_SALAD = { stuffing :'salad', price : 20, calories : 5};
Hamburger.STUFFING_POTATO = { stuffing :'potato', price : 15, calories : 10};

Hamburger.prototype.getSize = function (){
    return this.size;
};

Hamburger.prototype.getStuffing = function (){
    return this.stuffing;
};

Hamburger.prototype.calculatePrice = function (){
    return this.price;
};

Hamburger.prototype.calculateCalories = function (){
    return this.calories;
};

function Salad(name, weight) {
    this.name = name.name;
    this.weight = weight;
    this.price = (weight/100) * name.price;
    this.calories = (weight/100) * name.calories;
}

Salad.NAME_CESAR = {name :'cesar', price : 100, calories : 20};
Salad.NAME_OLIVIES = {name :'olivier', price : 50, calories : 80};
Salad.WEIGHT_STANDARD = 100;
Salad.WEIGHT_STANDARD_PLUS = 150;

Salad.prototype = Object.create(Hamburger.prototype);
Salad.prototype.constructor = Salad;


function Drink(name) {
    this.name = name.name;
    this.price = name.price;
    this.calories = name.calories;
}

Drink.COLA = {name : 'cola', price : 50, calories : 40 };
Drink.COFFEE = {name : 'coffee', price : 80, calories : 20};

Drink.prototype = Object.create(Salad.prototype);
Drink.prototype.constructor = Drink;

function Order(){
    this.orderList = [];
    for (var i = 0; i < arguments.length; i++) {
        this.orderList.push(arguments[i]);
    }
    this.isPaid = false;
}

Order.prototype.totalPrice = function(){
    return this.orderList.reduce((total, orderItem) => {
        return total + orderItem.calculatePrice();
    }, 0);
};

Order.prototype.totalCalories = function(){
    return this.orderList.reduce((total, orderItem) => {
        return total + orderItem.calculateCalories();
    }, 0);
};

Order.prototype.pay = function(){
    this.isPaid = true;
};

Order.prototype.addMenuItem = function(menuItem){
    if(!this.isPaid){
        this.orderList.push(menuItem);
    }
};

Order.prototype.deleteMenuItem = function(menuItem){
    if(this.isPaid){
        return;
    }

    var idx = null;
    this.orderList.forEach((item, index) =>{
        if((menuItem.constructor === item.constructor) && (menuItem.price === item.price) && (menuItem.calories === item.calories)){
            idx = index;
        }
    })
    
    if(idx !== null){
        this.orderList.splice(idx, 1);
    }
};


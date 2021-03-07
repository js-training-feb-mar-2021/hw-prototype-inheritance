function Hamburger(size, stuffing) { 
  this.size = size;
  this.stuffing = stuffing;
}

Hamburger.prototype.getSize = function(){
   if (this.size.price==100 && this.size.cal==40){
     return 'large';
   }
   else if(this.size.price==50 && this.size.cal==20){
     return 'small';
   }
}

Hamburger.prototype.getStuffing = function(){
   if (this.stuffing.price==10 && this.stuffing.cal==20){
     return 'cheese'
   }
   else if(this.stuffing.price==20 && this.stuffing.cal==5){
     return 'salad'
   }
   else if(this.stuffing.price==15 && this.stuffing.cal==10){
     return 'potato'
   }
}

Hamburger.prototype.calculatePrice = function(){
  return this.size.price + this.stuffing.price;
}

Hamburger.prototype.calculateCalories = function (){
  return this.size.cal + this.stuffing.cal;
}
 
Hamburger.SIZE_SMALL = {
  price:50,
  cal:20
}

Hamburger.SIZE_LARGE = {
  price:100,
  cal:40
}

Hamburger.STUFFING_CHEESE = {
  price:10,
  cal:20
}

Hamburger.STUFFING_SALAD = {
  price:20,
  cal:5
}
Hamburger.STUFFING_POTATO = {
  price:15,
  cal:10
}

function Salad(type, weight) { 
  this.type = type;
  this.weight = weight;
}

Salad.CAESAR = {
    price:100,
    cal:20
}

Salad.OLIVIE = {
    price:50,
    cal:80
}

Salad.prototype.calculateCalories = function (){
  return this.type.cal * this.weight * 0.01;
}

Salad.prototype.calculatePrice = function (){
  return this.type.price * this.weight * 0.01;
}


function Drink(type) { 
  this.type = type;
}

Drink.Cola = {
    price:50,
    cal:40
}

Drink.Cofee = {
    price:80,
    cal:20
}

Drink.prototype.calculatePrice = function (){
  return this.type.price;
}
Drink.prototype.calculateCalories = function (){
  return this.type.cal;
}


function Order(...products){
  this.products = [...products];
  this.orderIsPayed = false;
  
  this.getTotalPrice = this.products.reduce((total, current)=>{
    return total + current.calculatePrice();
  },0)

  this.getTotalCalories = this.products.reduce((total, current)=>{
    return total + current.calculateCalories();
  },0) 

  if(!this.orderIsPayed){
    Order.prototype.addProduct = function(item){
      this.products.push(item);
      this.getTotalPrice = this.products.reduce((total, current)=>{
        return total + current.calculatePrice();
      },0)
      this.getTotalCalories = this.products.reduce((total, current)=>{
        return total + current.calculateCalories();
      },0) 
    }
    Order.prototype.removeProduct = function(item){
        var index = this.products.indexOf(item);
        if (index > -1) {
          this.products.splice(index, 1);
        }
        this.getTotalPrice = this.products.reduce((total, current)=>{
          return total + current.calculatePrice();
        },0)
        this.getTotalCalories = this.products.reduce((total, current)=>{
          return total + current.calculateCalories();
        },0) 
    }
  }
  else{
    Order.prototype.addProduct = () => {return null;}
    Order.prototype.removeProduct = () => {return null;}
  }
}


Order.prototype.getOrderDetails = function(){
  return (
    {    
      orderTotalPrice: this.getTotalPrice + ' TUG',
      orderTotalCalories: this.getTotalCalories + ' CALORIES',
      orderIsPayed: (this.orderIsPayed) ? 'Yes' : "No"
    }
  )
}

/* для проверки
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
var hamburger2 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
var olivie = new Salad(Salad.OLIVIE, 150);
var caesar = new Salad(Salad.CAESAR, 120);
var order = new Order(hamburger, caesar, olivie);

order.addProduct(hamburger2)
order.removeProduct(caesar)
order.getOrderDetails()*/

class Donuts{
  constructor(flavour, size, price){
    this.flavour = flavour;
    this.size = size;
    this.price = 20;
  }
 calcPrize (price) {
   return `this price is ${this.price}`
  }
  color (color) {
   this.color = color;
    return `You pick ${this.color} color`
  }
}

// initialize the parent class
var breakfast = new Donuts('berry','M', 40);
console.log(breakfast.calcPrize());
console.log(breakfast.color('green')); // passing the method level props

//2nd level class inheriting the parent class
class veganDonuts extends Donuts{
  constructor(flavour,size,price,type){
    super(flavour, size,price);
    this.type = type;
  }
  printSize() {
    return `the sizes I picked are ${this.size}`
  }
  
}

const veganDonut = new veganDonuts('vanilla', 'S', 10, 'vegan')
console.log(veganDonut.type);
console.log(veganDonut.price);
console.log(veganDonut.printSize());

//3rd Level class inhertining the 2nd sub child NOT the parent.You can inherit the Donuts too
class gluttenDonuts extends veganDonuts{
  constructor(flavour,size,price,type, nStatus){
    super(flavour,size,price,type) ;
    this.nStatus = nStatus;
  }
  
}

var gDonuts = new gluttenDonuts('choclate','m', 40, 'new ', 'no');

console.log(gDonuts.flavour)
console.log(gDonuts.size);
console.log(gDonuts.type);
console.log(gDonuts.nStatus);
console.log(gDonuts.price);
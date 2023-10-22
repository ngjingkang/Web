function submit(){
    var size = document.getElementById('size').selectedOptions[0].value;
    var flavour = document.getElementById('flavour').selectedOptions[0].value;
    var topping = document.getElementById('topping').selectedOptions[0].value;
    

    alert ("Your order has been placed !\n" + "Size :" + size + "\n" + "Flavour :" + flavour + "\n" +"Toppings :" + topping + "\n" + "Thank You for buying SHOME product");

    document.location='../yu shun/payment_gateway.html';

}



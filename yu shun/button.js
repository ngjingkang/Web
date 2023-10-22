function display(obj, num)   // obj=desc1 select , num=1   //object =desc2 select  , num=2
{
    var price = "Price" + num;     // price=Price1
    var qty = "Quantity" + num;    // qty=Quantity1
    var amount = "Amount" + num;   // amount=Amount1

    if (obj.selectedIndex != 0)     // 1 != 0 True
    {

        document.getElementById(price).value = obj.value;     //Price1 =112
        document.getElementById(qty).disabled = false;      //Quantity1.disabled = false;
        document.getElementById(qty).value = "0";
        document.getElementById(amount).value = "0.00";
        document.getElementById(qty).focus();
        calculate();
    }
    else {	   //0 !=0  False

        document.getElementById(price).value = "";
        document.getElementById(price).disabled = true;
        document.getElementById(price).style.backgroundColor = "white";
        document.getElementById(qty).disabled = true;
        document.getElementById(qty).value = "0";
        document.getElementById(amount).value = "0.00";
        calculate();
    }
}


function quantity() {
    for (num = 0; num <= 10; num++)   //  num=9+1=10+1=11   <=10
    {
        document.write("<option>" + num + "</option>");
    }
}

function sub(obj, num)   // obj= Quantity1 select    num=1
{
    var amount = "Amount" + num;    // amount=Amount1
    var price = "Price" + num;      //price=Price1


    var qty = obj.selectedIndex;   //qty= 2
    if (qty > 0) {    //2>0   true
        var subtotal = parseFloat(document.getElementById(price).value) * qty;
        //112*2 =224
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();
    }
    else {   //0>0  False
        var subtotal = parseFloat(0);
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();

    }

}


function calculate() {

    var amt1, amt2, amt3, amt4, amt5, amt6, amt7, amt8, amt9, total;
    amt1 = parseFloat(document.getElementById('Amount1').value);
    amt2 = parseFloat(document.getElementById('Amount2').value);
    amt3 = parseFloat(document.getElementById('Amount3').value);
    amt4 = parseFloat(document.getElementById('Amount4').value);
    amt5 = parseFloat(document.getElementById('Amount5').value);
    amt6 = parseFloat(document.getElementById('Amount6').value);
    amt7 = parseFloat(document.getElementById('Amount7').value);
    amt8 = parseFloat(document.getElementById('Amount8').value);
    amt9 = parseFloat(document.getElementById('Amount9').value);

    total = amt1 + amt2 + amt3 + amt4 + amt5 + amt6 + amt7 + amt8 + amt9;

    document.getElementById('totalAmount').value = total.toFixed(2);
}


function cancelorder() {
    if (confirm("Are you sure you want to cancel this order?") == 1) {  // 0==1   //1==1  True
        document.book.reset();    //  document.forms[0].reset();   first form
        window.location.reload();
    }

}
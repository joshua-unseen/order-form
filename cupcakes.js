let order = {
    cakes: {},
    address: "change this",
    city: "change this",
    zip: "change this",
    phone: "change this"
}
let priceTotal = 0;

function CakeTotal() {
    let cakes = 0;
    const payButtons = document.getElementsByClassName("pay-button");
    for (let i = 1; i < 7; i++) {
        cakes += parseInt(document.getElementById("cake"+i).children[0].value);
    }
    if (cakes > 5) {
        for (let element of payButtons) {
           element.disabled = false; 
        }
    }
    else {
        for (let element of payButtons) {
            element.disabled = true;
        }
    }
    priceTotal = cakes * 3;
    console.log(priceTotal);
}

function Pay(payMethod) {
    cakeForm = document.getElementById("cake-select");
    
    for (child of cakeForm) {
        child.disabled = true;
    }
    for (let i = 1; i < 7; i++) {
        let thisCake = document.getElementById("cake" + i).children;
        let cakeName = thisCake[1].innerText;
        let cakeQuantity = thisCake[0].value;
        if (cakeQuantity > 0) {
            order.cakes[cakeName] = cakeQuantity;
        }
    }
    console.log(order);
    document.getElementById(payMethod).style = "display: default";
}

function PayPalMe() {
    window.open("https://paypal.me/joshuaunseen/" + priceTotal);
}
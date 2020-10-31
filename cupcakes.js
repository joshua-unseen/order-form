let order = {
    cakes: {},
    address: "change this",
    city: "change this",
    zip: "change this",
    phone: "change this"
}
function CakeTotal() {
    const payButtons = document.getElementsByClassName("pay-button");
    let cakes = 0;
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
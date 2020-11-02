let order = {
    cakes: {},
    address: "no data entered",
    city: "no data entered",
    zip: "no data entered",
    phone: "no data entered"
}
let priceTotal = 0;

const cakeSelect = document.getElementById("cake-select");
const custInfo = document.getElementById("customer-info");

cakeSelect.addEventListener("input", CakeTotal);
custInfo.addEventListener("input", InfoDump);

function CakeTotal() {
    const payButtons = document.getElementById("submit");
    let cakes = 0;
    let info = false;
    // for (let i = 1; i < 7; i++) {
    //     cakes += parseInt(document.getElementById("cake"+i).children[0].value);
    // }
    for (const field of cakeSelect.getElementsByTagName("input")) {
        console.log(cakeSelect);
        cakes += parseInt(field.value);
    }
    for (const field of custInfo.getElementsByTagName("input")) {
        console.log(field.value)
        if (field.value === "") {
            info = false;
            break;
        }
        info = true;
    }
    if (cakes > 5 && info === true) {
        payButtons.disabled = false;
    }
    else {
        payButtons.disabled = true;
    }
    priceTotal = cakes * 3;
    console.log(priceTotal);
}

function InfoDump(event) {
    console.log(event.target.value);
    order[event.target.name] = event.target.value;
}

function EmptyCheck(cakes, info) {

}

function Pay(payMethod) {
    // document.getElementById("cake-select").disabled = true;
    for (let i = 1; i < 7; i++) {
        let thisCake = document.getElementById("cake" + i).children;
        let cakeName = thisCake[1].innerText;
        let cakeQuantity = thisCake[0].value;
        if (cakeQuantity > 0) {
            order.cakes[cakeName] = cakeQuantity;
        }
    }
    console.log(order);
    switch (payMethod) {
        case "paypal":
            window.open("https://paypal.me/QuigleysCakes/" + priceTotal);
            break;
        default:
            break;
    }

    document.forms[0].style = "display: none;"
    document.write(JSON.stringify(order));
}
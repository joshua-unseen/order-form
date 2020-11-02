let order = {
    cakes: {},
    name: "no data entered",
    address: "no data entered",
    city: "no data entered",
    zip: "no data entered",
    phone: "no data entered"
}

const cakeSelect = document.getElementById("cake-select");
const custInfo = document.getElementById("customer-info");

cakeSelect.addEventListener("input", CakeTotal);
custInfo.addEventListener("input", InfoDump);

function CakeTotal(event) {
    order.cakes[event.target.name] = parseInt(event.target.value);
    GoAhead();

}

function InfoDump(event) {
    order[event.target.name] = event.target.value;

    GoAhead();
}

function GoAhead() {
    const payButtons = document.getElementById("submit");
    let cakes = 0;
    let info = false;

    for (const field of cakeSelect.getElementsByTagName("input")) {
        cakes += parseInt(field.value);
    }
    console.log(order.cakes);
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
    order.price = cakes * 3;
    console.log(order.price);

}

function Pay(payMethod) {
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
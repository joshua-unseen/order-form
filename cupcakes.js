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
    console.log(event.target.labels);
    cakeName = event.target.labels[0].innerText;
    order.cakes[cakeName] = parseInt(event.target.value);
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
    for (const field of custInfo.getElementsByTagName("input")) {
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
            // window.open("https://paypal.me/QuigleysCakes/" + order.price);
            break;
        default:
            break;
    }

    document.forms[0].style = "display: none;"
    document.write("<h2>New Order</h2>");
    for (cake in order.cakes) {
        document.write(`${cake}: ${order.cakes[cake]} <br />`);
    }
    document.write(`Total: $${order.price}`);
    document.write("<p>Customer Information:</p>");
    document.write(`${order.name}<br />`);
    document.write(`${order.address}, ${order.city}, ${order.zip}<br />`);
    document.write(`${order.phone}<br />`);
    document.write(`${order.email}<br />`);
}
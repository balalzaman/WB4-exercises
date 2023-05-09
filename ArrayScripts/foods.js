function previousOrder(order){
    let sum = 0;
    for(let i = 0; i < 3; i++) {
        sum += order[i].price;
    }
    return sum;
}

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

let price = previousOrder(lunch);
let tip = price * 0.18
let tax = price * 0.08
let totalTaxTip = (price + tax + tip);
console.log("Subtotal:  $" + price.toFixed(2));
console.log("Tax:       $" + tip.toFixed(2));
console.log("Tip:       $" + tax.toFixed(2));
console.log("Total:     $" + totalTaxTip.toFixed(2));
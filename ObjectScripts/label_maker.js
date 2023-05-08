let info = {
    name:"Balal Zaman",
    address:"123 Main Ave",
    city:"Brooklyn",
    state:"NY",
    zip:"11201",
};

function printContact(info) {
    console.log (info.name);
    console.log (info.address);
    console.log (info.city + "," + info.state + " " + info.zip);
}

printContact(info)
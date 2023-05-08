//define parsePartCode() 
// -> string as parameter formatted as suuplierCode:productNumber-size
// {supplierCode: "someValue", productNumber: "someValue", size: "someValue"}

let productInfo = {
    supplierCode: "ABC",
    productNumber: "123",
    size: "L"
};

console.log(productInfo)

function parsePartCode(productInfo){
    console.log("Supplier: " + productInfo.supplierCode + 
                " Product Number: " + productInfo.productNumber +
                " Size: " + productInfo.size)
};

return parsePartCode(productInfo)
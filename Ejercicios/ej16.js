const applyDiscount = (price = 0, discount = 0) => {
    let precioConDescuento = price * (discount / 100);
    return price - precioConDescuento;
};

console.log(applyDiscount(120,40));
console.log(applyDiscount(1000,10));
console.log(applyDiscount(1000,20));
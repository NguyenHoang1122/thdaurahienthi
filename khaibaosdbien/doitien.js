// b1: lay so tien, don vi from, to
// b2: tinh ty gia
// b3: tinh ket qua so tien* ty gia
// b4: hien thi
function convert() {
    amount = parseInt(document.getElementById("amount").value);
    from = document.getElementById("from").value;
    to = document.getElementById("to").value;
    rate = from/to;
    result = amount*rate;
    document.getElementById("result").innerHTML = result;
}

// phan biet ++a, va a++
// let x =100, y=100;
// 1. tang gia tri cua bien a len
// 2. gan a cho bieu thuc
// x1=++x
// gia tri cua x1 =101
// ++a: 1 ->2
// y1=y++
// y1=100
// a++: 2 ->1
// ca x va y deu 101
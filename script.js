// Bài 1
function student(name, age, address) {
    console.log("TÊN HỌC SINH: " + name, "TUỔI: " + age, "ĐỊA CHỈ: " + address, "");
}
student('Lê Minh Huy', '14', 'CLASSIFIED');
// // // // // // // // // // // // // // // // //
console.log("=====================================================")
// Bài 2: viết hàm để khi chạy trả về giá của các sản phẩm.
var smartPhone = [
    {name:'iphone', price: 649},
    {name:'Galaxy S6', price: 576},
    {name:'Galaxy Note 5', price: 489},
];
var smartPhones = smartPhone.map((smartPhone) => {
    return smartPhone.name;
  });
var prices = smartPhone.map((smartPhone) => {
    return smartPhone.price;
  });
console.log(smartPhones,"Với giá lần lượt",prices);
// // // // // // // // // // // // // // // // //
console.log("=====================================================")
// Bài 3: Chuyển các function sau sang dạng ES6 (arrow function):
foo= (x,y,z) =>{
	console.log( x, y, z );
}
foo= () =>{
	alert("Hello");
}
foo= (a,b) =>{
	let m = a+b*100;
	return m;
}
//Bài 4
//Check Folder
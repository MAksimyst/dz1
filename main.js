// Zavdannya 1
let a = prompt("Vvedit vashe imya");
alert("Pryvit, " + a + "!");


// Zavdannya 2
const a2 = 2026;

let b = prompt("Vvedit rik narodzhennya");
let c = a2 - b;

alert("Vam " + c + " rokiv");


// Zavdannya 3
let a3 = prompt("Vvedit dovzhynu storony kvadrata");
let b3 = a3 * 4;

alert("Perimetr: " + b3);


// Zavdannya 4
let a4 = prompt("Vvedit radius kola");
let b4 = 3.14 * a4 * a4;

alert("Ploshcha: " + b4);


// Zavdannya 5
let a5 = prompt("Vvedit vidstan u kilometrah");
let b5 = prompt("Za skilky hodyn vy hochete distatysya");
let c5 = a5 / b5;

alert("Potribna shvydkist: " + c5 + " km/god");


// Zavdannya 6
const a6 = 0.92;

let b6 = prompt("Vvedit sumu v dolarah");
let c6 = b6 * a6;

alert("Yevro: " + c6);


// Zavdannya 7
let a7 = prompt("Vvedit obsyag fleshky u GB");
let b7 = a7 * 1024;
let c7 = Math.floor(b7 / 820);

alert("Pomistitsya fayliv: " + c7);


// Zavdannya 8
let a8 = prompt("Skilky u vas groshey?");
let b8 = prompt("Skilky koshtuye odna shokoladka?");
let c8 = Math.floor(a8 / b8);
let d8 = a8 % b8;

alert("Shokoladok: " + c8 + "\nZdacha: " + d8);


// Zavdannya 9
let a9 = prompt("Vvedit tryznachne chislo");

let b9 = Math.floor(a9 / 100);
let c9 = Math.floor(a9 / 10) % 10;
let d9 = a9 % 10;

let e9 = d9 * 100 + c9 * 10 + b9;

alert("Palindrom: " + e9);


// Zavdannya 10
let a10 = prompt("Vvedit tsile chislo");

alert((a10 % 2 === 0 && "Chyslo parne") || "Chyslo neparne");
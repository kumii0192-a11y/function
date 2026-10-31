//function
//1. declaration
//2. expression

//1. Declaration
/*
  function name(parameter[optional]){
    code block;
  }
*/

function sayHello(){
  return "Hello World"; //belum akan muncul karena fungsi ini baru deklarasi
}
console.log(sayHello()); //memanggil function sayHello()

function sapaNama(name){
  return "My name is " + name; //parameter = name
}
console.log(sapaNama("Aisyah")); //mengisi parameter di console/pemanggilan
console.log(sapaNama("Sadewa"));

//menghitung luas persegi panjang menggunakan function
//luas = panjang * lebar

function persegiPanjang(panjang, lebar){
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah " + luas + " cm";
}
console.log(persegiPanjang(90, 88));
console.log(persegiPanjang(100, 27));
//fungsi function membuat function adalah membuat 1 fungsi dan dapat di gunakan berkali kali dengan nilai berbeda

//menghitung luas segitiga menggunakan function
//luas segitiga = 1/2 * alas * tinggi
function luassegitiga(alas, tinggi){
  let luassegitiga = 1/2 * alas * tinggi;
  return "Luas persegi panjang adalah " + luassegitiga + " cm";
}
console.log(luassegitiga(20,90));
console.log(luassegitiga(90, 88));

//konversi suku dari fahrenheit menjadi celcius menggunakan function
// C = (F-32) * (5/9)
function suhu(f){
  let suhu = (f-32) * (5/9);
  return f + " °F = " + suhu + " °C";
}
console.log(suhu(59));


//2. FUNCTION EXPRESSION
const hello = function(){
  return "Hello World"
}
console.log(hello);
console.log(hello());
  
  /*1. sapa nama
    2. luas persegi panjang
    3. luas segitiga
    4. konversi suhu
  */

const sayhello = function(namE){
  return "Hello " + namE;
}
console.log(sayhello("aisyah"));

const luaspp = function(p, l){
  let lpp = p * l;
  return "Luas persegi panjang adalah " + lpp + " cm";
}
console.log(luaspp(5, 6));

const luassgt = function(a, t){
  let lsgt = 1/2 * a * t;
  return "Luas segitiga adalah " + lsgt + " cm";
}
console.log(luassgt(10, 9));

const ksuhu = function(fhr){
  let shu = (fhr-32) * (5/9);
  return fhr + " °F = " + shu + " °C";
}
console.log(ksuhu(54));

//function Arrow; di dalam kode blok[ {} ] hanya bisa 1 baris (mempersingkat function) [=> menunjukkan kodeblok function]
const persegipanjang = (panjanG, Lebar) => "luas persegi panjang adalah" + panjanG * Lebar;
console.log(persegipanjang(2,6));

/* 1. say hello
   2. sapa nama
   3. luas segitiga
   4. konversi suhu
*/
const sayheLLO = () => "Hello";
console.log(sayheLLO());

const sapanama = (namA) => "Hello" + namA;
console.log(sapanama("Aisyah"));

const Lsegitga = (a, t) => "Luas segitiga = " + 1/2 * a * t + " cm";
console.log(Lsegitga(90, 7));

const Ksuhu = (f) => f + " °F = " + (5/9)*(f-32) + " °C";
console.log(Ksuhu(68));
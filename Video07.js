// VIDEO 7 - OPERASI STRING
// 1. char at
let dataString1 = "ANNISA RAMADHAN";
let dataChar = dataString1.charAt(0);
console.log(`charachter pada index 0 = ${dataChar}`);
dataChar = dataString1.charAt(1);
console.log(`charachter pada index 1 = ${dataChar}`);
dataChar = dataString1.charAt(2);
console.log(`charachter pada index 2 = ${dataChar}`);
dataChar = dataString1.charAt(3);
console.log(`charachter pada index 3 = ${dataChar}`);
dataChar = dataString1.charAt(4);
console.log(`charachter pada index 4 = ${dataChar}`);
dataChar = dataString1.charAt(5);
console.log(`charachter pada index 5 = ${dataChar}`); //tidak ada

// 2. menyambung string
let DEPAN = "azzahra";
let BELAKANG = "Radhitya";
let LENGKAP = DEPAN.concat(' ',BELAKANG, '\nganteng');
console.log(LENGKAP);

//3. MENGAMBIL INDEX (kemunculan pertama)
console.log(LENGKAP.indexOf('r'));
console.log(LENGKAP.indexOf('a'));
console.log(LENGKAP.indexOf('d'));
console.log(LENGKAP.indexOf('h'));
console.log(LENGKAP.indexOf('i'));
console.log(LENGKAP.indexOf('t'));
console.log(LENGKAP.indexOf('y'));
console.log(LENGKAP.indexOf('a'));

//4. SUBSTRING
console.log(LENGKAP.substring(8,16));
console.log(LENGKAP.substring(14,8));

//5. SLICE
console.log(LENGKAP.slice(8,16));
console.log(LENGKAP.slice(16,8)); //menjadi kosong

//6. REPLACE
let namabaru = LENGKAP.replace('Azzahra','Adhit');
console.log(namabaru);

//7. toLOWER
console.log(LENGKAP.toLowerCase());

//8. UPPERCASE
console.log(LENGKAP.toUpperCase());

//9. EXTARCT DATA NUMBER
let dataString2 = '150';
console.log(typeof dataString2);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '10.125'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);


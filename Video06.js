// VIDEO 6 - STRING (ESCAPING & LITERAL)
let data = "Uhuyy ini \tstring";
console.log(data);

// 1. ESCAPING STRING (\' \" \\ \n \t \r \b \f)
let data1 = 'Livy bertanya "Apakah kamu suka aku?"';
console.log(data1);
let data2 = "Kak R menjawab \"iya aku suka kamu\"";
console.log(data2);
let data3 = "Livy sedang berjalan-jalan ditepi pantai, \nSENDIRIANN";
console.log(data3);

// 2. LITERAL STRING
let namaDepan1 = "Anindya";
let Belakang2 = "Qolbiaaa";
let Absen = 17;
let Lengkap = Absen + " " + namaDepan1 + " " + Belakang2;
console.log(Lengkap);

//lebih elegant supaya ini tidak bikin error
let biodata = `${namaDepan1} ${Belakang2} adalah siswa absen ${Absen}`;
console.log(biodata);

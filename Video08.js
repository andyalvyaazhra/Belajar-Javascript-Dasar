let nama_depan, nama_belakang, nama_lengkap;

document.getElementById("button_merge").onclick = function() {
    // 1. Mengambil nilai dari input
    nama_depan = document.getElementById("nama_depan").value;
    nama_belakang = document.getElementById("nama_belakang").value;
    
    // 2. Menggabungkan nama
    nama_lengkap = nama_depan + " " + nama_belakang;

    // 3. Menampilkan hasil ke elemen target (Perhatikan ID dan Variabelnya)
    document.getElementById("nama_Lengkap").textContent = nama_lengkap;
};
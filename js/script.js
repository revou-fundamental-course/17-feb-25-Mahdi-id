//ini javascript eksternal
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slides img").length;

// Fungsi untuk menampilkan slide berikutnya
function showNextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0; // kembali ke slide pertama jika sudah mencapai akhir
  }
  // Geser wrapper slide berdasarkan index
  slides.style.transform = "translateX(" + -slideIndex * 100 + "%)";
}

// Panggil fungsi setiap 3 detik
setInterval(showNextSlide, 3000);

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit form secara default
  
    // Ambil nilai dari form dan hapus spasi ekstra
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const interested = document.getElementById("Interested").value;
  
    // Validasi: cek apakah field kosong
    if (name === "" || email === "" || interested === "") {
      alert("Semua field harus diisi dengan benar!");
      return; // Hentikan proses jika ada field kosong
    }
  
    // Validasi: cek apakah email mengandung karakter '@'
    if (!email.includes('@')) {
      alert("Masukkan email yang valid!");
      return;
    }
  
    // Tampilkan konfirmasi sebelum mengirim data
    const konfirmasi = confirm("Apakah Anda yakin ingin mengirim data?");
    if (konfirmasi) {
      // Jika konfirmasi OK, maka tampilkan pesan berhasil
      alert("Data berhasil dikirim!");
  
      // Refresh halaman setelah data dikirim
      location.reload();
    } else {
      // Jika user batal mengirim, tampilkan pesan pembatalan
      alert("Pengiriman data dibatalkan.");
    }
  });
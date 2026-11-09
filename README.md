# BENGKEL FINDER

Website statis untuk mencari bengkel motor dan mobil di sekitar Lhokseumawe, Aceh. Peta dan direktori memuat 17 entri contoh yang tersebar di Banda Sakti, Muara Dua, Muara Satu, Blang Mangat, dan Dewantara. Dibuat dengan HTML, CSS, dan JavaScript murni; tidak memerlukan instalasi, backend, maupun database server.

## Menjalankan di komputer

1. Buka folder proyek ini dengan Visual Studio Code.
2. Pasang ekstensi **Live Server** jika belum tersedia.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Izinkan akses lokasi jika ingin mengurutkan bengkel dari posisi perangkat. Jika izin ditolak, gunakan pencarian nama kecamatan atau alamat.

Alternatifnya, jalankan server statis sederhana yang sudah tersedia di lingkungan Anda dan buka situs melalui `http://localhost`. Geolocation biasanya membutuhkan `localhost` atau koneksi HTTPS; membuka file langsung (`file://`) dapat membatasi fitur lokasi.

## Fitur

- Pencarian langsung berdasarkan nama bengkel, kategori, kecamatan, atau alamat.
- Filter motor, mobil, tambal ban, ganti oli, dan servis umum.
- Urutan dan perhitungan jarak berdasarkan lokasi perangkat, daerah yang dicari, atau titik pusat kota sebagai referensi awal.
- Peta Leaflet dan OpenStreetMap, marker yang dapat dipilih, pengelompokan marker yang berdekatan, popup, dan peta lokasi pada detail.
- Cakupan data contoh pada lima kawasan Lhokseumawe dan sekitarnya.
- Detail alamat, jam buka, layanan, telepon contoh, rating contoh, panggilan, dan petunjuk arah Google Maps.
- Tata letak responsif dan pencarian daerah sebagai alternatif jika izin lokasi tidak tersedia.

## Data dan keterbatasan

Seluruh 17 bengkel, nama, alamat, koordinat, nomor telepon, rating, dan jam layanan di `script.js` adalah **data demonstrasi buatan**, bukan daftar usaha yang diverifikasi atau petunjuk bahwa lokasi usaha nyata berada di sana. Cakupan contoh melintasi Banda Sakti, Muara Dua, Muara Satu, Blang Mangat, dan Dewantara. Nomor telepon menggunakan angka contoh yang tidak valid untuk dihubungi. Foto kartu adalah foto stok lokal dari Unsplash, bukan foto atau bukti tempat usaha pada listing: [foto 1](https://images.unsplash.com/photo-1486262715619-67b85e0b08d3), [foto 2](https://images.unsplash.com/photo-1486006920555-c77dcf18193c), dan [foto 3](https://images.unsplash.com/photo-1558981806-ec527fa84c39). Salinan foto telah disimpan pada `assets\bengkel1.jpg` sampai `assets\bengkel3.jpg` agar tampilan tidak perlu mengunduh foto saat dijalankan. Foto-foto berasal dari [Unsplash](https://unsplash.com/license). Logo vektor tersedia di `assets\logo.svg`.

Internet diperlukan untuk memuat pustaka Leaflet dan Leaflet.markercluster, ubin peta OpenStreetMap, font, dan pencarian alamat daerah baru melalui layanan publik Nominatim/OpenStreetMap. Saat mengirimkan pencarian daerah yang tidak cocok dengan data lokal, teks pencarian itu dikirim ke Nominatim. Lokasi GPS diproses di browser untuk menghitung jarak dan tidak dikirim ke layanan geocoding. Daftar bengkel tetap dapat dicari tanpa jaringan, tetapi peta dan pencarian alamat eksternal tidak tersedia.

## Mengubah data contoh

Edit array `workshops` di `script.js`. Setiap entri berisi nama, alamat, koordinat lintang/bujur, kategori, nomor telepon, jam operasional, rating, layanan, serta path foto. Jarak menggunakan perhitungan Haversine; koordinat pusat awal berada di Lhokseumawe.

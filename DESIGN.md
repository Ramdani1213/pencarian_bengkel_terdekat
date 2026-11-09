# Design system

## Surface
Homepage BENGKEL FINDER adalah permukaan **Operate**: pengunjung mencari bengkel, memilih kategori, membandingkan jarak, membuka detail, lalu menelepon atau meminta arah.

## Visual direction
Sistem pencari lokasi berbasis peta dengan disiplin navigasi lapangan: biru laut gelap untuk orientasi dan tindakan utama, bidang putih untuk membaca daftar, latar abu-biru muda untuk konteks peta, dan oranye jalan sebagai aksen yang menuntun ke aksi serta marker. Gunakan ikon garis yang mudah dikenali, batas halus, bayangan tipis, dan sudut kartu yang tegas.

## Tokens
- `--navy`: `#102b46`, orientasi dan tombol utama.
- `--navy-2`: `#1b4364`, variasi bidang biru.
- `--blue`: `#2a668b`, tautan dan tindakan sekunder.
- `--orange`: `#e8794f`, aksi penting dan marker bengkel.
- `--paper`: `#fff`, permukaan konten.
- `--ground`: `#f3f6f7`, latar aplikasi.
- `--ink`: `#183147`, teks utama.
- `--muted`: `#647988`, teks pendukung.
- Display: Manrope; antarmuka dan paragraf: DM Sans; gunakan fallback sistem bila Google Fonts tidak tersedia.

## Composition and behavior
- Header ringkas memuat identitas, navigasi, dan konteks kota.
- Pencarian tampil sebelum filter kategori; daftar dan peta bersebelahan pada desktop, peta lebih dulu pada layar sempit.
- Kartu bengkel berisi foto stok lokal, kategori, rating contoh, jarak, jam, telepon, detail, dan arah.
- Detail terbuka dalam alur halaman, bukan modal, dan memuat peta lokasi serta aksi telepon/Google Maps.
- Marker bengkel yang berdekatan digabung menjadi cluster pada peta ringkasan; memilih cluster memperbesar area, lalu marker individual membuka popup detail.
- Semua filter dan navigasi dapat dioperasikan dengan keyboard; status hasil diumumkan melalui live region.
- Pada viewport kecil, filter kategori bergulir horizontal dan navigasi utama dapat dibuka-tutup.

## Truth and assets
Direktori terdiri dari 17 entri contoh yang secara ilustratif tersebar di Banda Sakti, Muara Dua, Muara Satu, Blang Mangat, dan Dewantara. Daftar dan angka adalah data contoh buatan, bukan ulasan atau klaim usaha nyata yang terverifikasi. Peta bergantung pada internet; cakupan awal peta mengikuti sebaran direktori, dan jarak dihitung dari pusat Lhokseumawe sampai lokasi pengguna atau daerah yang dicari. Foto stok adalah aset visual, bukan bukti bengkel atau listing nyata.

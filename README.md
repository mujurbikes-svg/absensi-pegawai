# Sistem Absensi Pegawai

Sistem absensi offline berbasis web yang dapat diinstall sebagai aplikasi di ponsel.

## Fitur

- ✅ Pencatatan absensi harian
- ✅ Manajemen data pegawai, shift, dan tanggal libur
- ✅ Pencatatan lembur
- ✅ Laporan absensi dengan perhitungan otomatis
- ✅ Backup dan restore data
- ✅ Mode offline (PWA)

## Cara Install di Ponsel

1. Buka aplikasi ini di browser ponsel
2. Tap menu/titik tiga di browser
3. Pilih "Add to Home Screen" atau "Install App"
4. Aplikasi akan muncul di homescreen seperti aplikasi native

## Cara Deploy di GitHub Pages

1. Fork repository ini
2. Buka Settings > Pages
3. Pilih source: GitHub Actions
4. Sistem akan otomatis deploy

## Backup & Restore

- **Backup**: Download file JSON berisi semua data
- **Restore**: Upload file backup untuk memulihkan data
- **Reset**: Hapus semua data (hati-hati!)

## Teknologi

- HTML5, CSS3, JavaScript
- Progressive Web App (PWA)
- LocalStorage untuk penyimpanan offline
- Service Worker untuk caching

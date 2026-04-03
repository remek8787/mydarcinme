# Archilla Dracin Hub Player

Website hub drama yang siap jalan di **GitHub Pages**.

## Struktur Utama

- `index.html` → Hub player utama (langsung kebuka tampilan hub)
- `hub.html` → Alias halaman hub (isi sama untuk kompatibilitas link lama)
- `portal.html` → Landing lama (arsip, tidak dipakai di UI utama)
- `app.js` → Logic fetch API, detail, episode, video player
- `style.css` → Styling halaman hub
- `landing.css` → Styling landing lama

## Fitur

- Hub player (UI baru, Bootstrap CDN + custom dark glass):
  - provider: Dramabox, ReelShort, Reelife, iDrama, Melolo, Shortmax
  - responsif HP (layout mobile-first, feed/keyword bisa geser horizontal)
  - mode tema Dark/Light toggle
  - animasi halus (fade/slide) untuk panel dan card
  - pilih platform + bahasa
  - search drama / muat beranda otomatis
  - tab rekomendasi API: `homepage`, `latest`, `dubbed`, `foryou`, `popular`
  - keyword chips untuk popular search (jika endpoint mendukung)
  - lihat detail + daftar episode
  - pagination episode (bukan cuma tampil 10)
  - auto lanjut ke episode berikutnya setelah selesai
  - tap area video: kiri mundur 10 detik, kanan maju 10 detik
  - play video (`m3u8` pakai `hls.js`)

## URL Parameter di Hub

`hub.html` mendukung query parameter:

- `platform=dramabox|melolo|shortmax`
- `lang=<kode_bahasa>`
- `key=<api_key>`
- `q=<keyword>`
- `auto=1` (langsung search otomatis jika `q` ada)

Contoh:

```txt
hub.html?platform=dramabox&lang=in&key=331D2CC91BC4C0B2218052619DBBBA84
```

## Deploy ke GitHub Pages

1. Push ke branch `main`
2. Buka **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` + `/ (root)`
5. Save

Selesai. Halaman hub akan otomatis pakai `index.html`.

## Catatan Keamanan

Karena ini front-end statis, API key di URL/front-end bisa terlihat user. Untuk produksi aman, pindahkan key ke backend proxy private.

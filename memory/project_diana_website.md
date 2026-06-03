---
name: project-diana-website
description: Couple website untuk Diana — struktur, fitur, dan rencana pengembangan
metadata:
  type: project
---

Website couple bertema warm beige (#FFF8E7, #fff3ce, #ffeace) untuk Diana.

**Struktur folder:**
- `index.html` — landing page pilih tahun (2025 / 2026)
- `2025/index.html` — konten tahun lalu (ucapan HBD, surat cinta, musik, doa, galeri statis dari asset/)
- `2026/index.html` — kerangka tahun ini (placeholder teks, galeri foto upload via localStorage)
- `asset/` — foto, audio, model 3D bersama
- `models/dino/` — model dinosaur GLTF untuk Three.js

**Fitur 2026:**
- Upload foto langsung dari browser (FileReader → base64 → localStorage)
- Lightbox untuk melihat foto besar
- Hapus foto individual atau semua
- Foto di-persist per browser/device via localStorage

**Fitur kunci yang perlu diisi user di 2026/index.html:**
- Teks ucapan HBD (Section 1)
- Surat cinta (Section 2, ada komentar `<!-- Ganti ... -->`)
- Kartu doa (Section 3)
- Foto hero utama/kedua/ketiga (Section 1)

**Deploy:** GitHub Pages — push repo ke GitHub, aktifkan di Settings > Pages > source: main branch / root.

**Why:** User ingin pisahkan kenangan per tahun dan tidak lagi menambah foto manual lewat asset.
**How to apply:** Saat user minta tambah konten, selalu tunjuk file dan section yang tepat dengan komentar yang sudah ada.

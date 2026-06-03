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

**Tema & teknologi:**
- 2025 = tema warm beige (asli), identik dengan file original. three.js 0.129.0 dino, body-scroll + AOS.
- 2026 = tema PINK, layout berbeda. Spline flower (https://prod.spline.design/GKeXMIq-O6IlX04h/scene.splinecode) ganti kue 3D.
- Upload foto: Cloudinary (cloudName djjmzkykd, preset diana_photos unsigned) → URL disimpan di Firestore (project diana-website-a7d4d). config di `config.js`.
- Deploy: Vercel (4-u-two.vercel.app). Repo GitHub: onlyyourza/4U.

**Fitur 2026:**
- Spline flower 3D di hero (pink gradient, foto hero KOSONG/placeholder polaroid untuk diisi user)
- Game memory match (8 pasang emoji couple) interaktif
- Doa slider smooth (pointer drag + tombol panah ‹ ›, scroll-behavior smooth)
- Galeri upload Cloudinary (kosong, user isi sendiri)
- Musik lo-fi: tombol floating 🎵 memutar `../asset/lofi.mp3` (USER HARUS TAMBAHKAN file lofi.mp3 ke asset/)
- Floating hearts animation
- AOS init saat load, body sebagai scroller (penting agar animasi muncul)

**Fitur kunci yang perlu diisi user di 2026/index.html:**
- Teks ucapan HBD (Section 1)
- Surat cinta (Section 2, ada komentar `<!-- Ganti ... -->`)
- Kartu doa (Section 3)
- Foto hero utama/kedua/ketiga (Section 1)

**Deploy:** GitHub Pages — push repo ke GitHub, aktifkan di Settings > Pages > source: main branch / root.

**Why:** User ingin pisahkan kenangan per tahun dan tidak lagi menambah foto manual lewat asset.
**How to apply:** Saat user minta tambah konten, selalu tunjuk file dan section yang tepat dengan komentar yang sudah ada.

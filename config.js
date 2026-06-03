// ============================================================
//  Database config (Google Firestore) — menyimpan daftar URL foto
//  ISI NILAI INI:
//  1. Buka console.firebase.google.com → project diana-website
//  2. Klik ikon gear (Settings) → Project Settings
//  3. Scroll ke bawah → Your apps → klik ikon </>
//  4. Kalau belum ada app, klik "Add app" → pilih Web → daftarkan
//  5. Copy nilai-nilai di bawah dari bagian firebaseConfig
// ============================================================
const dbConfig = {
    apiKey:            "AIzaSyBeqpHJXGya71wdGdf477FRoTVzxbZyseM",
    authDomain:        "diana-website-a7d4d.firebaseapp.com",
    projectId:         "diana-website-a7d4d",
    messagingSenderId: "626300390671",
    appId:             "1:626300390671:web:b1933b66cf7befec2e027a"
};

// ============================================================
//  Cloudinary config — upload & hosting foto
//  Sudah terisi, tidak perlu diubah
// ============================================================
export const cloudinaryConfig = {
    cloudName:    "djjmzkykd",
    uploadPreset: "diana_photos",
    folder:       "diana-website"
};

export default dbConfig;

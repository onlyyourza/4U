// ============================================================
//  Firestore config — untuk menyimpan metadata/URL foto
//  ISI NILAI INI DENGAN CONFIG DARI GOOGLE CONSOLE
//  Project Settings → Your apps → Web app → config
// ============================================================
const dbConfig = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
};

// ============================================================
//  Cloudinary config — untuk upload & hosting foto
//  Cloud Name dan Upload Preset sudah diisi
// ============================================================
export const cloudinaryConfig = {
    cloudName:    "djjmzkykd",
    uploadPreset: "diana_photos",
    folder:       "diana-website"
};

export default dbConfig;

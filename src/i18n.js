import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// untuk komponen navbar
import navbar_en from "./locales/en/navbar_en.json";
import navbar_id from "./locales/id/navbar_id.json";
import navbar_sp from "./locales/sp/navbar_sp.json";

// untuk komponen utama
import app_en from "./locales/en/app_en.json";
import app_id from "./locales/id/app_id.json";
import app_sp from "./locales/sp/app_sp.json";

// untuk komponen about
import about_en from "./locales/en/about_en.json";
import about_id from "./locales/id/about_id.json";
import about_sp from "./locales/sp/about_sp.json";

// untuk komponen projek
import project_en from "./locales/en/project_en.json";
import project_id from "./locales/id/project_id.json";
import project_sp from "./locales/sp/project_sp.json";

// untuk komponen activitas
import activities_en from "./locales/en/activites_en.json";
import activities_id from "./locales/id/activities_id.json";
import activities_sp from "./locales/sp/activities_sp.json";

// untuk komponen certificates
import certificates_en from "./locales/en/certificates_en.json";
import certificates_id from "./locales/id/certificates_id.json";
import certificates_sp from "./locales/sp/certificates_sp.json";

// untuk komponen contact
import contact_en from "./locales/en/contact_en.json";
import contact_id from "./locales/id/contact_id.json";
import contact_sp from "./locales/sp/contact_sp.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    ns : ["navbar", "app","about", "projek", "activities", "certificates", "contact"],

    resources: {
        en : {
            navbar : navbar_en,
            app : app_en,
            about : about_en,
            projek : project_en,
            activities : activities_en,
            certificates : certificates_en,
            contact : contact_en
        },
        id : {
            navbar : navbar_id,
            app : app_id,
            about : about_id,
            projek : project_id,
            activities : activities_id,
            certificates : certificates_id,
            contact : contact_id
        },
        sp : {
            navbar : navbar_sp,
            app : app_sp,
            about : about_sp,
            projek : project_sp,
            activities : activities_sp,
            certificates : certificates_sp,
            contact : contact_sp
        }
    }
});

export default i18n;
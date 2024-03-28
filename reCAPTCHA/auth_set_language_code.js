import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.languageCode = auth.useDeviceLanguage();
// To apply the default browser preference instead of explicitly setting it.
// auth.useDeviceLanguage();
// [END auth_set_language_code_modular]
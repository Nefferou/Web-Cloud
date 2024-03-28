import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
export const signInPhoneNumber = (phone, reCAPTCHA)=> {
    return signInWithPhoneNumber(auth, phone, reCAPTCHA)
}

import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
export const signInPhoneNumber = (phone)=> {
    console.log(appVerifier);
    return signInWithPhoneNumber(auth, phone, appVerifier)
}

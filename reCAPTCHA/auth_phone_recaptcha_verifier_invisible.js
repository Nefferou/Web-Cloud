import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'phone-sign', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
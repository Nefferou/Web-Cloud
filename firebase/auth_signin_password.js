import "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
import "../firebaseConfig";
import { GithubAuthProvider } from "firebase/auth";

const provider = new GithubAuthProvider();
export {provider};
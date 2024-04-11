import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { githubProvider } from "./auth_github_provider_create";

const auth = getAuth();
export const signinWithGithub = () => {
    console.log("signinWithGithub")
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            console.log("signin success with github")
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
    });
}
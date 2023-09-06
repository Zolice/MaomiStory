<template>
    <div>
        <h1>Login</h1>
        <!-- <button class="btn bg-primary" @click="login">ok</button> -->
    </div>
</template>

<!-- <script setup lang="ts">
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

onMounted(() => {
    console.log("mounted")

    //check if user already logged in
    const user = useCurrentUser()
    if (user.value) {
        console.log("user already logged in")
        //redirect to index
        navigateTo("/")
        return
    }
    console.log("user not logged in")
})

getRedirectResult(auth)
  .then((result) => {
    if (result == null) {
        console.log("no result")
        return
    }
    console.log("got result")
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(user)
    navigateTo("/")
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log("error", errorCode, errorMessage, email, credential)
  });

const login = () => {
    console.log("login");
    signInWithRedirect(auth, provider);
};
</script> -->
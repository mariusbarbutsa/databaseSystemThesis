import SpaService from "./spa-service.js";

// import loaderService from "./loader.js";
import Users from "./users.js";
import {
    firebaseDB
} from "./firebase-service.js";

class AuthService {
    constructor() {
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.userRef = firebaseDB.collection("users");
        this.authUser;
        this.authUserRef;
        this.spa = new SpaService('home');
    }

    init() {
        // Listen on authentication state change
        firebase.auth().onAuthStateChanged(user => {
            if (user) { // if user exists and is authenticated
                this.userAuthenticated(user);
            } else { // if user is not logged in
                this.userNotAuthenticated();
            }
        });


    }

    userAuthenticated(user) {
        console.log('hi')
        this.spa.hideTabbar(false);
        this.initAuthUserRef();
        // loaderService.show(false);
    }

    userNotAuthenticated() {
        this.spa.hideTabbar(true);
        this.spa.navigateTo("login");

        // Firebase UI configuration
        const uiConfig = {
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: '#home'
        };
        this.ui.start('#firebaseui-auth-container', uiConfig);
        // loaderService.show(false);
    }

    initAuthUserRef() {
        let authUser = firebase.auth().currentUser;
        this.authUserRef = firebaseDB.collection("users").doc(authUser.uid);

        // init user data and favourite movies
        this.authUserRef.onSnapshot({
            includeMetadataChanges: true
        }, userData => {
            if (!userData.metadata.hasPendingWrites) {
                let user = {
                    ...authUser,
                    ...userData.data()
                }; //concating two objects: authUser object and userData objec from the db
                this.authUser = user;
                this.appendAuthUser();
                // Users.init();
                // loaderService.show(false);
            }
        });
    }

    logout() {
        firebase.auth().signOut();
    }

    appendAuthUser() {
        const userName = document.querySelectorAll('.username');
        userName.forEach(username => {
            username.innerHTML = this.authUser.displayName || "";
        });
    }

    updateAuthUser(name, img, birthdate, hairColor, phone) {
        loaderService.show(true);

        let user = firebase.auth().currentUser;

        // update auth user
        user.updateProfile({
            displayName: name
        });

        // update database user
        this.authUserRef.set({
            img: img,
            birthdate: birthdate,
            hairColor: hairColor,
            phone: phone
        }, {
            merge: true
        }).then(() => {
            loaderService.show(false);
        });

    }


}

const authService = new AuthService();
export default authService;
import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import './Login.scss';

export default function Login() {

    const firebaseConfig = {
        apiKey: "AIzaSyC2JC9Q0JWqIf40j4B7kBY47wjVPP90fUs",
        authDomain: "vue-crm-d6c4e.firebaseapp.com",
        databaseURL: "https://vue-crm-d6c4e-default-rtdb.firebaseio.com",
        projectId: "vue-crm-d6c4e",
        storageBucket: "vue-crm-d6c4e.appspot.com",
        messagingSenderId: "590464555013",
        appId: "1:590464555013:web:e29f1a9b0c72e235b7246c",
        measurementId: "G-JSLF4TE0TW"
    }

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

    const auth = firebase.auth();

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }

    return (
        <div className="login">
            <div className="login-wrap-btn">
                <div
                    className="button"
                    type="submit"
                    onClick={login}
                >
                    <span>
                        Войти
                    </span>
                </div>
            </div>
            <div className="login-info">
                <span>Войдите с помощью Google</span>
            </div>
        </div>
    )
}

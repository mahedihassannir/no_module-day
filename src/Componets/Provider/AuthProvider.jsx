

import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.config';
import { createContext, useEffect, useState } from 'react';

let auth = getAuth(app)

export let contexm = createContext(null)


const AuthProvider = ({ children }) => {



    const provider = new GoogleAuthProvider

    let handleLogin = () => {

        return signInWithPopup(auth, provider)


    }

    let HandleLogout = () => {
        return signOut(auth)
    }







    // here is observer for user watching


    let [user, SetUser] = useState(null)

    useEffect(() => {

        let off = onAuthStateChanged(auth, watcher => {

            SetUser(watcher)

        })

        return (() => {
            off()
        })




    }, [])



    // here is the bag
    let userInfo = {
        handleLogin,
        user,
        HandleLogout
    }


    // here is the exporting nad making the contex

    return <contexm.Provider value={userInfo}>
        {children}
    </contexm.Provider>

    // here is the exporting nad making the contex ends



};

export default AuthProvider;
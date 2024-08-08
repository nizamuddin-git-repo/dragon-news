import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('use in tha state changed', currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        logOut,
        singIn,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
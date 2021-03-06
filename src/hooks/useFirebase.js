import { useEffect, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider , signInWithPopup, onAuthStateChanged, updateProfile , signOut } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication()


const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    //new User
    
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password )
        .then(result =>{
            const destination = '/';
            history.push(destination)
            const newUser = {email, displayName:name, password}
            setUser(newUser)

            //user save to db 
            // saveUser(email, name, 'POST')

            // send name to firebase
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            setAuthError('')
        })
        .catch(err =>{
            setAuthError(err.message)
        })
        .finally(()=>setIsLoading(false))
    }
    
    //exesting user
        const loginUser = (email, password, location, history)=>{
            setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                   const destination = location?.state?.from || '/home'
                   history.push(destination);
                   setAuthError('')
                })
                .catch((error) => {
                    setAuthError(error.message)
                })
                .finally(()=>setIsLoading(false));
        }

        const signInWithGoogle = (location, history) =>{
            setIsLoading(true)
            signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            // saveUser(user.email, user.displayName, 'PUT')
            const destination = location?.state?.from || '/home'
            history.push(destination);
            setAuthError('')
            // ...
        }).catch((error) => {
            setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));;
        }
    
    //observer
    
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribe;
    },[])
    
    //logout
        const logOut = () =>{
            setIsLoading(true)
            signOut(auth)
            .then(()=>{
                setAuthError('')
            })
            .catch(err =>{
                setAuthError(err.message)
            })
            .finally(()=>setIsLoading(false))
        }
        //user creation to database 
        return{
            user,
            registerUser,
            loginUser,
            signInWithGoogle,
            authError,
            isLoading,
            logOut
        }
}
export default useFirebase




// const saveUser = (email, displayName, method) =>{
//     const user = {email:email, displayName:displayName}
//     fetch('http://localhost:5000/users', {
//         method:method,
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(user)
//     })
// }
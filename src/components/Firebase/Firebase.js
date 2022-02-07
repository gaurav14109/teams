// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs,addDoc,doc, deleteDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDn8m49QEijDtH3UVuPbSt-aQKq4gjKbgQ",
    authDomain: "teams-39b8e.firebaseapp.com",
    projectId: "teams-39b8e",
    storageBucket: "teams-39b8e.appspot.com",
    messagingSenderId: "717022745259",
    appId: "1:717022745259:web:27488b1a4f7e00def11dee"
};

// Initialize Firebase
class FireBase {

    constructor() {

        initializeApp(firebaseConfig)
        this.auth = getAuth(); //Developer config auth
        this.db = getFirestore()
    }

    doCreateUserWithEmailAndPassword = async (email, password) => {

        const user = await createUserWithEmailAndPassword(this.auth, email, password)
        return user
            
    }

    doSignInWithEmailAndPassword = async (email, password) => {

     const user = await signInWithEmailAndPassword(this.auth, email, password)
     return user
    
    }
    doGetSignedUser = async ()=>{

      return new Promise((resolve, reject) => {
        
          onAuthStateChanged(this.auth, (user)=>{
            if (user){
              resolve(user)
            }
      }) 
    })

    }
    doSignout = async () => {
          signOut(this.auth)
    }


    getDashBoardData = async()=>{

      const data = await getDocs(collection(this.db, "userData"));
      return data

    }

    addMember = async (data)=>{

      await addDoc(collection(this.db,"userData"),data)

    }
    deleteDoc = async(id)=>{
      await deleteDoc(doc(this.db, "userData", id));
    }
}

export default new FireBase();
//firebase instance is created using firebase class
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import User from 'src/interfaces/User';
import {getFirestore} from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp)

@Injectable({
  providedIn: 'root',
})
export class FCFMServiceService {

  public isLoged : any = false;
  auth: Auth;
  db = dbCloudFirestore;

  constructor() {
    this.auth = getAuth(firebaseApp);
    onAuthStateChanged(this.auth, user =>{
      if(user != undefined || user != null){
        this.isLoged = user;
      }
    });
  }

  tieneSesion(){
    return this.isLoged;
  }
  getStateAuth(){
    return this.auth;
  }
  // addUser(user: User) {
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }

  
  register(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  logout() {
    return signOut(this.auth);
  }
}

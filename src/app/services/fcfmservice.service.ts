import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';
import User from 'src/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class FCFMServiceService {

  constructor(private firestore: Firestore) { }

  addUser(user:User){
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user)
  }
}

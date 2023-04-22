import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import User from 'src/interfaces/User';
import {CollectionReference, DocumentData, Firestore, addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Producto } from '../producto';
// import { Producto } from '../interfaces/producto';
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
        this.isLoged = true;
      }
    });
  }


  tieneSesion(){
    // return this.isLoged;
    if(localStorage.length === 0){
      return false;
    }else{
      return true;
    }
  }
  getStateAuth(){
    return this.auth;
  }
  // addUser(user: User) {
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }
  async altaProducto(producto: Producto){
    const docRef = await addDoc(collection(this.db,'producto'), producto);
    console.log("Documento escrito con id: "+docRef.id);
  }
  
  
  register(user: User) {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password);
  }

  login(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password);
  }

  logout() {
    this.isLoged = false;
    return signOut(this.auth);
  }

  async getProductos(productos: Producto[]) {
    
    console.log(getDocs(collection(this.db, 'producto')))
    await getDocs(collection(this.db, 'producto'))
    .then((querySnapshot: any)=>{
      querySnapshot.forEach((doc: any)=>{
        let data: any = doc.data();
        let producto:Producto = new Producto;
          producto.nombre = data.nombre;
          producto.horas = data.horas;
          producto.descripcion = data.descripcion;
          producto.precio = data.precio;
          console.log(data);
          productos.push(producto);
      });
    })
    .catch(error=>{
      console.log('Ocurrio un erro en el guardardo:'+error);
    });
  }  
  

}

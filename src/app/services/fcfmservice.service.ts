import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import User from 'src/interfaces/User';
import { collectionData} from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  getDocs,
  getFirestore
} from 'firebase/firestore';
import { Auth } from '@angular/fire/auth';
import { collection as collec } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Producto } from '../producto';
import { Observable, Subject } from 'rxjs';
import { Vendedor } from '../interfaces/vendedor';
// import { Producto } from '../interfaces/producto';
const firebaseApp = initializeApp(environment.firebaseConfig);
const dbCloudFirestore = getFirestore(firebaseApp);

@Injectable({
  providedIn: 'root',
})
export class FCFMServiceService {
  public isLoged: any = false;
  public logeado: boolean = false;
  private idUser:string;
  db = dbCloudFirestore;
  private loggedInSubject: Subject<boolean> = new Subject<boolean>();
  constructor(private auth: Auth, private firestore:Firestore) {
    this.idUser = 'nada'
  }

  


  setUserId(userId: string) {
    this.idUser = userId;
  }

  getUserId() {
    return this.idUser;
  }
  tieneSesion() {
    return false
  }

  getLoggedInSubject(){
    return this.loggedInSubject.asObservable();
  }  

  set(status: boolean){
    this.loggedInSubject.next(status)
  }  
  getStateAuth() {
    return this.auth;
  }
  // addUser(user: User) {
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }
  async altaProducto(producto: Producto) {
    const docRef = await addDoc(collection(this.db, 'producto'), producto);
    console.log('Documento escrito con id: ' + docRef.id);
  }

  register({ email, password }: User) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async altaVendedor(vendedor: Vendedor) {
    const docRef = await addDoc(collection(this.db, 'vendedor'), vendedor);
    console.log('Documento escrito con id: ' + docRef.id);
  }

   login({ email, password }: User){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    this.isLoged = false;
    this.logeado = false;
    return signOut(this.auth);
  }

  async getProductos(productos: Producto[]) {
    await getDocs(collection(this.db, 'producto'))
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          let data: any = doc.data();
          let producto: Producto = new Producto();
          producto.nombre = data.nombre;
          producto.horas = data.horas;
          producto.descripcion = data.descripcion;
          producto.precio = data.precio;
          console.log(data);
          productos.push(producto);
        });
      })
      .catch((error) => {
        console.log('Ocurrio un error en el guardardo:' + error);
      });
  }
  getVendedor(): Observable<Vendedor[]>{
    const vendedorRef = collection(this.firestore, 'vendedor');
    return collectionData(vendedorRef, {idField:'id'}) as Observable<
      Vendedor[]
    >;
  }
}

import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { Vendedor } from '../interfaces/vendedor';
import { FCFMServiceService } from './fcfmservice.service';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private firestore: Firestore, private fcfcmService: FCFMServiceService) {}

  getProductos(): Observable<Producto[]> {
    const productRef = collection(this.firestore, 'producto');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      Producto[]
    >;
  }
  eliminarProducto(producto: Producto) {
    const productoDocRef = doc(this.firestore, `producto/${producto.id}`);
    return deleteDoc(productoDocRef);
  }

  updateProducto(producto: Producto, id: string | null) {
    const productoDocRef = doc(this.firestore, `producto/${id}`);
    return updateDoc(productoDocRef, { ...producto });
  }

  getProducto(id: string): Observable<any> {
    const productoDocRef = doc(this.firestore, `producto/${id}`);
    return docData(productoDocRef, { idField: 'id' });
  }
  getVendedores(): Observable<Vendedor[]>{
    const vendedorRef = collection(this.firestore, 'vendedor');
    return collectionData(vendedorRef, {idField:'id'}) as Observable<
      Vendedor[]
    >;
  }
  getVendedor(id: string): Observable<any> {
    const vendedorDocRef = doc(this.firestore, `vendedor/${id}`);
    return docData(vendedorDocRef, { idField: 'id' });
  }
  getVendedorByVendedor(email:string, password: string) {
    this.fcfcmService.login({email, password}).then((userCredential) => {
      const user = userCredential.user;
      // Obtener el ID del usuario
      const userId = user.uid;
      localStorage.setItem('idVendedor', userId);
    })
    
  }
}

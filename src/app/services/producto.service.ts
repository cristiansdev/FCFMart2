import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private firestore: Firestore) {}

  getProductos(): Observable<Producto[]> {
    const productRef = collection(this.firestore, 'producto');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      Producto[]
    >;
  }

  eliminarProducto(producto: Producto){
    const productoDocRef = doc(this.firestore, `producto/${producto.id}`);
    return deleteDoc(productoDocRef);
  }

  updateProducto(producto: Producto, id:string | null){
    const productoDocRef = doc(this.firestore, `producto/${id}`);
    return updateDoc(productoDocRef,{... producto});
  }

  getProducto(id: string):Observable<any> {
    const productoDocRef = doc(this.firestore, `producto/${id}`);
    return docData(productoDocRef, { idField: 'id' });
  }
}

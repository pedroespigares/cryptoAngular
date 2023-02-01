import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, addDoc, deleteDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public datosAsociaciones: Observable<any[]>;

  constructor(public firestore: Firestore, public auth: AuthService) {
    const datos = collection(this.firestore, 'asociaciones');
    this.datosAsociaciones = collectionData(datos);
   }

  addCrypto(currency: any){
    addDoc(collection(this.firestore, 'asociaciones'), {
      userID: this.auth.userID,
      currency: currency,
      currencyID: currency.id,
    });
  }

  deleteCrypto(currency: any){
    
  }
  
   // Para iterar sobre los datos de la base de datos
  // let dato of datosAsociaciones | async

  // datosAsociaciones: Observable<any[]>;;

  // datosModo2 = new Array<any>();

  // Este metodo se trae los datos de la base de datos tal cual

  // constructor(public firestore: Firestore){
  //   const datos = collection(firestore, 'asociaciones');
  //   this.datosAsociaciones = collectionData(query(datos, where('userID', '==', 'userID')));
  // }

  // Para escribir en la base de datos dentro de un metodo

  // escribirDatos(){
    // addDoc(collection(this.firestore, 'asociaciones'), {
    //   userID: 'userID',
    //   nombre: 'nombre',
    // });
}
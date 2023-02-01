import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Firestore, collectionData, collection, query, where, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoAPIService {

  public cryptoList = new Array<any>();

  constructor(private http: HttpClient) {}

  getCryptoList(){
    this.http.get("https://api.coingecko.com/api/v3/coins")
    .subscribe((data:any) => {
      this.cryptoList = data;
    })
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

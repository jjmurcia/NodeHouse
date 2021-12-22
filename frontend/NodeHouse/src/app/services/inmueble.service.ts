import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  static modelo: any;
  static query: any;
  static deleteOne: any;
  static send(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  getAllInmueble(){
    return this.httpClient.get("http://localhost:8080/inmuebles/")
  }

  postCreateInmueble(Inmueble: any){
    return this.httpClient.post("http://localhost:8080/inmuebles/",Inmueble,{headers: {"Content-Type": "application/json"} })
  }

  getInmueblesByBranch(branch:string){

  }

  deleteInmueble(branch:string,model:string){

  }

}

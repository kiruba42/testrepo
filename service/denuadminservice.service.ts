import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Illegalwords } from '../classfiles/illegalwords';

@Injectable({
  providedIn: 'root'
})
export class DenuadminserviceService {

  constructor(private http: HttpClient) { }
  postillegalwords(illegalwords:Illegalwords){
   return this.http.post<any>("http://localhost:8080/illegal",illegalwords)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateillegalwords(illegalwords:Illegalwords){
    return this.http.put<any>("http://localhost:8080/illegal",illegalwords)
     .pipe(map((res:any)=>{
       return res;
     }))
   }
  getallillegalwords(){
    return this.http.get<any>("http://localhost:8080/illegal")
     .pipe(map((res:any)=>{
       return res;
     }))
   }
}

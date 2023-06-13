import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Assos } from './assos';
 
@Injectable({
 providedIn: 'root'
})
export class AssosService {
 private url = 'http://localhost:5200';
 private assos$: Subject<Assos[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshAssos() {
   this.httpClient.get<Assos[]>(`${this.url}/assos`)
     .subscribe(assos => {
       this.assos$.next(assos);
     });
 }
 
 getAssos(): Subject<Assos[]> { // donne toutes les assos
   this.refreshAssos();
   return this.assos$;
 }
 
 getAsso(id: string): Observable<Assos> { //donne une seule asso
   return this.httpClient.get<Assos>(`${this.url}/assos/${id}`);
 }
 
 createAsso(assos: Assos): Observable<string> {
   return this.httpClient.post(`${this.url}/assos`, assos, { responseType: 'text' });
 }
 
 updateAsso(id: string, assos: Assos): Observable<string> {
   return this.httpClient.put(`${this.url}/assos/${id}`, assos, { responseType: 'text' });
 }
 
 deleteAsso(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/assos/${id}`, { responseType: 'text' });
 }
}
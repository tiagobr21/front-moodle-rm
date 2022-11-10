import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  cadastrarAlunos = 'http://127.0.0.1:9000/cadastrar'; 
  consultarAlunos = 'http://127.0.0.1:9000/consultar'; 
  deletarAlunos = 'http://127.0.0.1:9000/deletar'; 
  constructor(private _http: HttpClient) { }

 

   listarAlunos():Observable<any>{
    return this._http.get(`${this.cadastrarAlunos}`).pipe(
      catchError((error, caught) => {
       alert('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
       return error
      }))

  }
  
  consulAlunos():Observable<any>{
    return this._http.get(`${this.consultarAlunos}`).pipe(
      catchError((error, caught) => {
       alert('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
       return error
      }))
   
    }


    excluirAlunos(data:any):Observable<any>{
     console.log(data)
      return this._http.post(`${this.deletarAlunos}`,data).pipe(
        catchError((error, caught) => {
         alert('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
         return error
        }))
     
      }

}

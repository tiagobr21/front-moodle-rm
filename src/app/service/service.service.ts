import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorserviceComponent } from '../components/errors/errorservice/errorservice.component';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlcCadastrarAlunos = 'http://localhost:4200/api/cadastrar'; 
  urlConsultarAlunos = 'http://localhost:4200/api/consultar'; 
  urlDeletarAlunos = 'http://localhost:4200/api/excluir'; 

  constructor(private _http: HttpClient,private dialog:MatDialog) { }

 
   listarAlunos():Observable<any>{
    return this._http.get(`${this.urlcCadastrarAlunos}`).pipe(
      catchError((error, caught) => {
       const dialogConfig = this.dialog.open(ErrorserviceComponent,{
          width:'550px',
          height:'15%'
       })
       return error
      }))
  }
  
  consulAlunos():Observable<any>{
    return this._http.get(`${this.urlConsultarAlunos}`).pipe(
      catchError((error, caught) => {
       alert('O servidor não está respondendo no momento, por favor aguarde e atualize a página (F5) !');
       return error
      }))
    }
   
    deletarAlunos(id:any):Observable<any>{
      let ids = id;
      console.log(ids);
      return this._http.get(`${this.urlDeletarAlunos}/${ids}`);
    }

}

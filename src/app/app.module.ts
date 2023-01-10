

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TestApiComponent } from './components/test-api/test-api.component';
import { ConsultarAlunosComponent } from './components/consultar-alunos/consultar-alunos.component';
import { AppMaterialModule } from './components/material/app-material.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ExcluirAlunoComponent } from './components/msg/excluir-aluno/excluir-aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorserviceComponent } from './components/errors/errorservice/errorservice.component';






@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    ConsultarAlunosComponent,
    ExcluirAlunoComponent,
    ErrorserviceComponent,

  
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

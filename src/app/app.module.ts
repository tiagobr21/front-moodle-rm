

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TestApiComponent } from './components/ava/test-api/test-api.component';
import { ConsultarAlunosComponent } from './components/ava/test-api/consultar-alunos/consultar-alunos.component';
import { AppMaterialModule } from './components/material/app-material.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ExcluirAlunoComponent } from './components/msg/excluir-aluno/excluir-aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorserviceComponent } from './components/errors/errorservice/errorservice.component';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/digital/functions/functions.component';
import { ConsultarAlunoDigitalComponent } from './components/digital/consultar-aluno-digital/consultar-aluno-digital.component';






@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    ConsultarAlunosComponent,
    ExcluirAlunoComponent,
    ErrorserviceComponent,
    HomeComponent,
    FunctionsComponent,
    ConsultarAlunoDigitalComponent,

  
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

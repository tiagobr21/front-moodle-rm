import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestApiComponent } from './components/test-api/test-api.component';
import { AppComponent } from './app.component';
import { ConsultarAlunosComponent } from './components/consultar-alunos/consultar-alunos.component';


const routes: Routes = [
  {path:'',component:TestApiComponent},
  {path:'alunos/consultar-aluno',component:ConsultarAlunosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}


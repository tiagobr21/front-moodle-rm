import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestApiComponent } from './components/ava/test-api/test-api.component';
import { ConsultarAlunosComponent } from './components/ava/test-api/consultar-alunos/consultar-alunos.component';
import { HomeComponent } from './components/home/home.component';
import { FunctionsComponent } from './components/digital/functions/functions.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'ava',component:TestApiComponent},
  {path:'digital',component:FunctionsComponent},
  {path:'ava/consultar-aluno',component:ConsultarAlunosComponent},
  {path:'digital/consultar-aluno',component:ConsultarAlunosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}


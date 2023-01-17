import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConsultarAlunosComponent } from './consultar-alunos/consultar-alunos.component';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  
  responsealunos:any;
  responsecursos:any;
  loading:boolean = false;
  loading2:boolean = false;
  cadastrar:boolean = false;
  cadastrar2:boolean = false;
  stop:boolean = false;
  showelogs:boolean = false;
  showelogs2:boolean = false;
  countresponse:any
  countresponse2:any



  constructor(private service: ServiceService,private dialog:MatDialog) { }

  ngOnInit(): void {

  }

  cadastrarUsuarios(){
    this.cadastrar = true;
    this.service.listarAlunos().subscribe((res)=>{
        this.loading= true;
        this.responsealunos = res;
        console.log(this.responsealunos);
        this.responsealunos = this.responsealunos.logs;
        this.countresponse = this.responsealunos.length/2; 
    });
  }

  cadastrarCurso(){
    this.cadastrar2 = true;
    this.service.criarCursos().subscribe((res)=>{
    this.loading2= true;
    this.responsecursos = res;
    this.countresponse2 = this.responsecursos.length
    console.log(this.responsecursos);

   });
  }

  logs(){
    this.showelogs = !this.showelogs;
  }

  logs2(){
    this.showelogs2 = !this.showelogs2;
  }


}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeletarComponent } from '../deletar/deletar.component';
import { ConsultarAlunosComponent } from '../consultar-alunos/consultar-alunos.component';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  
  response:any;
  loading:boolean = false;
  cadastrar:boolean = false;
  stop:boolean = false;

  constructor(private service: ServiceService,private dialog:MatDialog) { }

  ngOnInit(): void {

  }

  cadastrarUsuarios(){
    this.cadastrar = true;
    this.service.listarAlunos().subscribe((res)=>{
        this.loading= true;
        this.response = res;
     
        console.log(this.response);
    })
  }

  openDelete(){

    const dialogRef = this.dialog.open(DeletarComponent,{
      width:'550px'
    });
  }
 



}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConsultarAlunosComponent } from '../consultar-alunos/consultar-alunos.component';


@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  
  response:any;
  responsend:any[]=[]
  loading:boolean = false;
  cadastrar:boolean = false;
  stop:boolean = false;
  showerrors:boolean = false;
  countresponse:any

  constructor(private service: ServiceService,private dialog:MatDialog) { }

  ngOnInit(): void {

  }

  cadastrarUsuarios(){
    this.cadastrar = true;
    this.service.listarAlunos().subscribe((res)=>{
        this.loading= true;
        this.response = res;
        console.log(this.response);
        this.response = this.response.logs;
        this.countresponse = this.response.length/2; 

     
    
    })
  }


  errors(){
    this.showerrors = !this.showerrors;
  }


}

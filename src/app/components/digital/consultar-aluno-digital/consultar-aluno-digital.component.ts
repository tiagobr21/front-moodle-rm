import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-consultar-aluno-digital',
  templateUrl: './consultar-aluno-digital.component.html',
  styleUrls: ['./consultar-aluno-digital.component.css']
})
export class ConsultarAlunoDigitalComponent implements OnInit {

  constructor(private service: ServiceService,private dialog:MatDialog) { }

  
  alunos:any;
  alunos_array:any[] = [];
  loading:boolean = false;
  ids:any[] = [];

  ngOnInit(): void {
    this.service.consulAlunos().subscribe((res)=>{
      this.loading = true;
      this.alunos = res;
      
      console.log(this.alunos);

      for(let i=0;i< this.alunos.length;i++){
  
        if(this.alunos[i].id == 1){
            this.alunos.splice(i, 1);
        }  
        if(this.alunos[i].id == 2){
          this.alunos.splice(i, 1);
        }  
        if(this.alunos[i].id == 3){
          this.alunos.splice(i, 1);
        }  
         
        this.alunos_array.push(this.alunos[i]);

        this.alunos_array.reverse();
         
  
      }
  });

  }

  deletarAluno(id:any){
          
    this.service.deletarAlunos(id).subscribe((res)=>{
        
      setTimeout(() => {
       window.location.reload();
     }, 1000);
     
 
   }) 
    
 }

}

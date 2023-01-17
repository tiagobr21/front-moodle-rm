import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExcluirAlunoComponent } from '../../../msg/excluir-aluno/excluir-aluno.component';

@Component({
  selector: 'app-consultar-alunos',
  templateUrl: './consultar-alunos.component.html',
  styleUrls: ['./consultar-alunos.component.css']
})
export class ConsultarAlunosComponent implements OnInit {

  alunos:any;
  alunos_array:any[] = [];
  loading:boolean = false;
  ids:any[] = [];


  constructor(private service: ServiceService,private dialog:MatDialog) { }

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
      
      const dialogRef = this.dialog.open(ExcluirAlunoComponent,{
        width:'500px',
  
      })
    }) 
     
  }

}

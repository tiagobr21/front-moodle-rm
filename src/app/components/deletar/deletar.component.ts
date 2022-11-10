import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
 
  }

  deleteAluno(id:any){
 
    this.service.excluirAlunos(id).subscribe((res)=>{
       console.log(res);
    }) 
  }

}

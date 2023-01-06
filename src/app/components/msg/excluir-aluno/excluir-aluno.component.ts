import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir-aluno',
  templateUrl: './excluir-aluno.component.html',
  styleUrls: ['./excluir-aluno.component.css']
})
export class ExcluirAlunoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ExcluirAlunoComponent>) { }

  ngOnInit(): void {
  }
  
  closeModal(){
     this.dialogRef.close();
      window.location.reload();
  }
}

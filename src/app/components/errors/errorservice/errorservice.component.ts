import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-errorservice',
  templateUrl: './errorservice.component.html',
  styleUrls: ['./errorservice.component.css']
})
export class ErrorserviceComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ErrorserviceComponent>) { }

  ngOnInit(): void {
  }
   
  closeModal(){
    this.dialogRef.close();
     window.location.reload();
 }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'popup-edit',
  templateUrl: './popup-edit.component.html',
  styleUrls: ['./popup-edit.component.css']
})
export class PopupEditComponent {
  
  editTask!:string;
  
  constructor(private service:DataService,private dialogRef: MatDialogRef<PopupEditComponent>) { }


  onSubmit(){
    this.service.edittedTaskEmitter(this.editTask);
    this.editTask='';
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }
 
}

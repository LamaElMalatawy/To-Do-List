import { Component,Input,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.css']
})
export class PopupAlertComponent {

  @Input() popupTitle!:string;

  constructor(private dialogRef: MatDialogRef<PopupAlertComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any){};


  onClose(){
    this.dialogRef.close();
  }
  
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { task } from 'src/task';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopupAlertComponent } from '../popup-alert/popup-alert.component';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [DatePipe]
})
export class AddTaskComponent {


  task = new task();
  taskName!:string;
  taskDate!:Date;
  tasks!:task[];
  found!:boolean;
  index!:number;

  constructor(private service:DataService, private datePipe:DatePipe,private dialog: MatDialog){

  }
  onSubmit(){    

    this.task = new task();
    this.taskDate = new Date();

    this.task.name = this.taskName;
    this.task.isCompleted = false;
    this.task.creationDate = this.datePipe.transform(this.taskDate,'dd-MM-yyyy')!;

    if(this.taskName==='')
      this.dialog.open(PopupAlertComponent);
    this.service.taskDataEmit(this.task);
    this.taskName='';
  }



}

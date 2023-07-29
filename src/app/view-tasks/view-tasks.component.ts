import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { task } from 'src/task';
import { MatDialog } from '@angular/material/dialog';
import { PopupEditComponent } from '../popup-edit/popup-edit.component';
import { DatePipe } from '@angular/common';
import { PopupAlertComponent } from '../popup-alert/popup-alert.component';

@Component({
  selector: 'view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit{

  taskName!:string;
  taskStatus!:boolean;
  taskDate!:string;
  taskObj!:task;
  searchName!:string;
  date!:Date;
  viewFilter!:string;
  idx!:number;
  datePipe!:DatePipe;
  popupAlert!:PopupAlertComponent;
  searchText = '';
  

  
  tasks:task[]=[
    {name:"finish task #2",isCompleted:false,isDeleted:false,creationDate:'21-07-2023'},
    {name: "finish until ch8 in the angular course", isCompleted:false,isDeleted:false,creationDate:'21-07-2023'}
  ];

  historyArray!:task[];
  rowsToRemove: boolean[] = Array(this.tasks.length).fill(false);


  constructor(private service:DataService,private dialog: MatDialog){}  
  ngOnInit(): void {

    this.service.taskData.subscribe((res)=>{
      this.idx = this.tasks.findIndex((task) => task.name === res.name)!;
      if(this.idx==-1)
        this.tasks.push(res);
      
      else
        this.matchingTaskAlert();
        
    })

  }

  onChecked(name:string){
    let index:number;
    index= this.tasks.findIndex((task) => task.name == name)!;
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    return this.tasks[index].isCompleted;
  }

  editTask(name:string){
    this.dialog.open(PopupEditComponent);
    let index:number;
    index= this.tasks.findIndex((task) => task.name == name)!;
    this.service.edittedTask.subscribe((res)=>{
      this.tasks[index].name = res;
      
  
    })
  }
  deleteTask(name:string){
    let index:number;
    index = this.tasks.findIndex((task) => task.name == name)!;
    //this.tasks[index].isDeleted = true;
    // this.rowsToRemove[index] = true;
    // this.service.edittedTask.subscribe((res)=>{
    //   this.tasks[index].isDeleted = true;
  
    // })
    this.tasks.splice(index,1);
  }

  getSelectedOption(event:any){
    this.viewFilter = event.target.value;
    console.log(this.viewFilter);
  }

  matchingTaskAlert(){
    this.dialog.open(PopupAlertComponent,{
    data:{
      title: 'Adding Task Alert',
      message: 'This task matches an already existing task! Please enter a new one...'
    }
  });
}
  
}

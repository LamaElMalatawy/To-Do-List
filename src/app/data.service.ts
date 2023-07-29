import { Injectable,EventEmitter } from '@angular/core';
import { task } from 'src/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  taskData = new EventEmitter<task>();
  edittedTask = new EventEmitter<string>();
  taskArray = new EventEmitter<task[]>();

  taskName!:string;
  taskStatus!:boolean;
  taskDate!:string;

  constructor() { }

  taskDataEmit(data:task){
    this.taskData.emit(data);
  }

  taskArrayEmit(tasks:task[]){
    this.taskArray.emit(tasks);
  }

  edittedTaskEmitter(data:string){
      this.edittedTask.emit(data);
    }

    
    
  

 
}

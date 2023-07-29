import { Pipe, PipeTransform } from '@angular/core';
import { task } from 'src/task';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(tasks: task[], viewFilter=''): any {
    if(viewFilter==="")
      return tasks;

    let filteredTasks:task[]=[];
    if(viewFilter==='Completed')
    {
      //tasks.filter()
      for(let task of tasks){
        if(task.isCompleted===true)
          filteredTasks.push(task);
        }
      return filteredTasks;
     }
    else if(viewFilter==='' || viewFilter==='All'){
      return tasks;
    }
    
  }

}

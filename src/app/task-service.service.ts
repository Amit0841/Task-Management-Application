import { Injectable } from '@angular/core';
import { Task } from './TaskModle';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
taskArr:Task[]=[];

setTask(task:Task){
this.taskArr.push(task);
}

getTaskArr(){
  return this.taskArr;
}

setArr(arr:Task[]){
this.taskArr=arr;
}
}

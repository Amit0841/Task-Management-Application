import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../TaskModle';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-task-add-component',
  templateUrl: './task-add-component.component.html',
  styleUrls: ['./task-add-component.component.css']
})
export class TaskAddComponentComponent {

constructor(private taskService:TaskServiceService){}

arr:Task[]=[];

form=new FormGroup({
  title:new FormControl('',Validators.required),
  description:new FormControl('',Validators.required),
  completed:new FormControl('Pending',Validators.required)
})

i=1;
takeData(){
 this.arr= this.taskService.getTaskArr();
 this.i=this.arr.length+1;
let s=new Task(this.i++, this.form.value.title,this.form.value.description,this.form.value.completed);
this.taskService.setTask(s);
this.form.reset();
}
}

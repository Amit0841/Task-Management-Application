import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../TaskModle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})

export class TaskListComponentComponent implements OnInit{
  todo:any;

    ngOnInit(): void {
      this.taskService.firestoreCollection.valueChanges({idField:'idd'}).subscribe(item=>{
        console.log(item);
  this.arr=item;
  this.taskService.setArr(this.arr);
      })
    }

constructor(private taskService:TaskServiceService,private router: Router){this.ch()}
arr:any[]=[];
 id=0;
 title='';
 description='';
 status='';

 delete(idd:string){
this.taskService.deleteItem(idd);
 }

ch(){
  this.arr=this.taskService.getTaskArr();
}

}

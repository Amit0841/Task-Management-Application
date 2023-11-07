import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from '../TaskModle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})

export class TaskListComponentComponent {
constructor(private taskService:TaskServiceService,private router: Router){this.ch()}
arr:Task[]=[];
 id=0;
 title='';
 description='';
 status='';

ch(){
  this.arr=this.taskService.getTaskArr();
  console.log(this.arr);
}
// navigateToPage(id:number){
// console.log(id);

// this.router.navigate(['taskDetail',id]);

// }
}

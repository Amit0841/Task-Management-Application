import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../task-service.service';
import {Task} from '../TaskModle';

@Component({
  selector: 'app-task-detail-component',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})

export class TaskDetailComponentComponent  {
   taskId=0;
   title='';
   description='';
   status='';
   b='';
   idd='';
arr:any[]=[];

  constructor(private taskServiceService:TaskServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
       this.taskId = params['id']; 
    });

   

    this.arr=taskServiceService.getTaskArr();
for(let i=0;i<this.arr.length;i++){
  if(this.taskId==this.arr[i].id){
    this.title= this.arr[i].title;
    this.description= this.arr[i].description;
    this.status= this.arr[i].completed;
    this.idd=this.arr[i].idd;
    if(this.status=="complete"){
this.b="pending";
    }else{
      this.b="complete";
    }
  }
}
  }


  complete(id:number,idd:string) {


    for(let i=0;i<this.arr.length;i++){
      if(id==this.arr[i].id){
        if(this.arr[i].completed=="complete"){
          this.arr[i].completed="pending";
          this.status="pending";
          this.b='complete';
        }else{
          this.arr[i].completed="complete";
        this.status="complete";this.b='pending';
        }
        this.taskServiceService.setArr(this.arr);

      }
    }
    this.taskServiceService.updateStatus(idd,this.status);
  }
}

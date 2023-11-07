import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';

const routes: Routes = [
  {component:TaskAddComponentComponent, path:'taskAdd'},
  {component:TaskDetailComponentComponent, path:'taskDetail/:id'},
  {component:TaskListComponentComponent, path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

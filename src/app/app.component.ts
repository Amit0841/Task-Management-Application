import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from './task-service.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Products-HTTP-Request';
constructor(private taskServiceService:TaskServiceService){}
l='Login';

  ngOnInit(): void {
    // this.taskServiceService.login();
    this.isLogin=this.taskServiceService.checkLogin();
    if(this.isLogin){
      this.l='Logout';
    }else{
      this.l='Login';
    }
  }
  logout(){
    if(this.isLogin){
      this.taskServiceService.logout();
      this.ngOnInit();
      localStorage.removeItem('userData');
      alert("logout Success");
    }
  }
  isLogin=false

}

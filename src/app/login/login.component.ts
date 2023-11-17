import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email='';
  password='';
  error='';
constructor(private router: Router,private appComponent:AppComponent,private taskService:TaskServiceService){}
arr:any=[];

  ngOnInit(): void {
    this.taskService.userCollection.valueChanges({idField:'idd'}).subscribe(item=>{
this.arr=item;
    })
  }

  Login() {
    this.error='';
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if(!emailRegex.test(this.email)){
      this.error+='Email must be a proper format.';
    }else
    if(this.password.length<8){
      this.error+=' Password must be more than Eight characters.';
    }else{
      for(let i=0;i<this.arr.length;i++){
        if(this.arr[i].email==this.email && this.arr[i].password==this.password){
            this.taskService.login(this.email);
            this.taskService.setLocal(this.email);
            alert("login Success")
            this.router.navigate(['/taskAdd']);
            this.appComponent.ngOnInit();
        }
        if(i==this.arr.length-1){
this.error="Wrong Email or Password ";
        }
      }
    }
  }
  
}

import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service.service'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email='';
  password='';
  error='';
  userName='';
constructor(private taskServiceService:TaskServiceService){}

  register() {
    this.error='';
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if(!emailRegex.test(this.email)){
      this.error+='Email must be a proper format.';
    }else if(this.password.length<8){
      this.error+=' Password must be more than Eight characters.';
    }else{
      this.taskServiceService.regesterUser(this.email,this.password,this.userName);
      alert("Register Success you can login now");
    }
  }
}

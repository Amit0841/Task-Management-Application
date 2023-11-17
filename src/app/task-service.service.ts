import { Injectable } from '@angular/core';
import { Task } from './TaskModle';
import {AngularFirestore, AngularFirestoreCollection}  from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
 firestoreCollection: AngularFirestoreCollection;
 userCollection: AngularFirestoreCollection;
user='';
isLogin:boolean=false;

  constructor(private firestore:AngularFirestore) {
    this.firestoreCollection=this.firestore.collection(`to${this.user}`);
  this.userCollection=this.firestore.collection(`users`);
  this.to();
  this.getLocal();
  }
 to(){
  this.firestoreCollection=this.firestore.collection(`to${this.user}`);
 }
taskArr:any[]=[];

getLocal(){
  const storedData = localStorage.getItem('userData');
if (storedData) {
    const userData = JSON.parse(storedData);
    this.isLogin=true;
} else {
    console.log('No data found in local storage');
}
}

setLocal(email:string){
localStorage.setItem('userData', JSON.stringify(email));
}
login(email:string){
  this.user=email;
  this.to();
  this.isLogin=true;
}
checkLogin(){
  return this.isLogin;
}
logout(){
  this.isLogin=false;
}

setTask(task:Task) {
this.taskArr.push(task);
this.firestoreCollection.add({id:task.id,title:task.title,description:task.description,completed:task.completed});
}

regesterUser(email:string,password:string,userName:string){
  this.userCollection.add({email:email,password:password,userName:userName});
}

updateStatus(idd:string,newStatus:string){
  this.firestoreCollection.doc(idd).update({completed:newStatus});
}
deleteItem(idd:string){
  this.firestoreCollection.doc(idd).delete();
}
getTaskArr(){
  return this.taskArr;
}

setArr(arr:any[]){
this.taskArr=arr;
}
}

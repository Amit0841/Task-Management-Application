import { Injectable } from '@angular/core';
import { Task } from './TaskModle';
import {AngularFirestore, AngularFirestoreCollection}  from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
 firestoreCollection: AngularFirestoreCollection;

  constructor(private firestore:AngularFirestore) { 
this.firestoreCollection=firestore.collection('todos');
  }
 
taskArr:any[]=[];

setTask(task:Task){
this.taskArr.push(task);
this.firestoreCollection.add({id:task.id,title:task.title,description:task.description,completed:task.completed});
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

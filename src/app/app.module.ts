import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskAddComponentComponent } from './task-add-component/task-add-component.component';
import { TaskDetailComponentComponent } from './task-detail-component/task-detail-component.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponentComponent,
    TaskAddComponentComponent,
    TaskDetailComponentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule ,AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

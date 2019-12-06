import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from "./components/main/main.component";
import { WorkoutlogComponent } from './components/workoutlog/workoutlog.component';
import { GuideComponent } from './components/guide/guide.component';
import { VideolibraryComponent } from './components/videolibrary/videolibrary.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path:'log',
    component: WorkoutlogComponent
  },
  {
    path:'guide',
    component: GuideComponent
  },
  {
    path:'video',
    component: VideolibraryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

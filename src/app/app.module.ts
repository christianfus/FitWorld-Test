import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/login/form/form.component';
import { ImageComponent } from './components/login/image/image.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { WorkoutlogComponent } from './components/workoutlog/workoutlog.component';
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { CountUpModule } from 'countup.js-angular2';
import { GuideComponent } from './components/guide/guide.component';
import { VideolibraryComponent } from './components/videolibrary/videolibrary.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    ImageComponent,
    RegisterComponent,
    HeaderComponent,
    MainComponent,
    WorkoutlogComponent,
    GuideComponent,
    VideolibraryComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartModule,
    TableModule,
    InputTextModule,
    CountUpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

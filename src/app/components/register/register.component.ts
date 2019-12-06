import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Lifts } from 'src/app/models/lifts';
import { Ph_entry } from 'src/app/models/ph_entry';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  public errorForm:boolean = false;
  public registry:FormGroup;
  ngOnInit() {
    
  }
  public addUser(form:NgForm){
    let lifts:Lifts = {
      bench: form.value.bench,
      squat: form.value.squat,
      deadlift: form.value.deadlift,
      ohp: form.value.ohp,
      pullup: form.value.pullup,
      bbrow: form.value.bbrow,
    }
    let ph_entry:Ph_entry = {
      height: form.value.height,
      weight: form.value.weight,
      age: form.value.age,
    }
    let user:User = {
      username: form.value.username,
      password: form.value.password,
      mail: form.value.mail,
      ph_entry: [ph_entry],
      lifts: [lifts],
    }
    
    this.userService.postUser(user)
      .subscribe(res => {
        console.log(res);
      })

  }

  

}

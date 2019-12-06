import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  usersServer:Array<User>;
  checker:boolean = false;
  
  
  ngOnInit() {
    
    this.userService.getUsers().subscribe(data => this.usersServer = data);
    
     
  }  

  public logMe(username:string,password:string){
    this.usersServer.forEach((element) => {
      if((element.username == username)&&(element.password == password)){
        this.router.navigateByUrl('/main');
        localStorage.setItem('user', JSON.stringify(element));
      }else{
        this.checker = true;
      }
    });
  }

}

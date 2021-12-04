import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  isSuccessFull=false;
  isSignUpFailed=false;
  errorMessage='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.user).subscribe({
      next:(data) =>{

      },
      error:(error:Error) =>{

      },
      complete:()=>{

      }
    });
  }
}

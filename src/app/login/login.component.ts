import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { TokenService } from '../service/token.service';
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

  constructor(
    private userService: UserService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.user).subscribe({
      next:(data) =>{
        this.tokenService.saveToken(data.token);
        this.isSuccessFull=true;
        this.isSignUpFailed=false;
      },
      error:(error:Error) =>{
        this.isSuccessFull=false;
        this.isSignUpFailed=true;
        this.errorMessage=error.message;
        this.tokenService.signOut();
      },
      complete:()=>{

      }
    });
  }

}

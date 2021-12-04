import { Component, OnInit } from '@angular/core';
import {Rol} from '../model/rol';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();
  isSuccessFull=false;
  isSignUpFailed=false;
  errorMessage='';


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

   listaroles: Rol[]=[
    {id:0, name: '---'},
    {id:1, name: 'User'},
    {id:2, name: 'Admin'}

  ];

  createUser(): void{
    this.userService.register(this.user).subscribe({
      next: (data) => {
        console.log('Observer got a next value: ' );
        this.isSuccessFull=true;
        this.isSignUpFailed=false;
      },
      error: (err: Error) => {
        console.error('Observer got an error: ' + err.message);
        this.isSuccessFull=false;
        this.isSignUpFailed=true;
        this.errorMessage=err.message;

      },
      complete: () => {
        console.log('Observer got a complete notification')
      },
    });
  }

}

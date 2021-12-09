import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  sessionValida(): boolean{
        if(this.tokenService.getToken()!=null){
          return false;
        }else{
          return true;
        }
  }

}

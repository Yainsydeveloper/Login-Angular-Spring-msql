import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  
  
  user:any = {};



ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem("user"));
    if(!this.user){
      location.href = "/";
    }else{

      if(this.user.rolIdrol != 1){
        location.href = "/";
      }
    }
  
    
  }

  logout(){

    localStorage.removeItem("user");
    location.href = "/";
  }


}


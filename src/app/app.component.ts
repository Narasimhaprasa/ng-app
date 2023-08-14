import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';
  msg : string = "Ashok sir good in microservices";
  message : string = "GeeksforGeeks1";
  src = 'https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png'; 

  fname:string = "Adam";
  lname:string = "Smith";
  age : number = 25;
  gender : string= "Male";
  country : string = "India";
  isEmployed : boolean=true;

  handleSubmitButton(){
    this.fname = "John";
    this.lname = "Buttler";
    this.age = 30;
    this.gender = "Male";
    this.country = "USA";
    this.isEmployed = false;
    }

    // User Registration Form 
    username:string ="";
    password:string="";
    confirmPassword:string = "";
    Gender:string ="";
    Country:string = "";
    licenseAgreement:boolean=false;

    validMessage:string = "";
    RegisterClick(){

      this.validMessage="UserName : "+this.username+" Password: " +this.password+"<br/>ConfirmPassword :"+this.confirmPassword +"<br/>Gender :"+this.Gender+"<br/> Cpuntry : "+this.Country+"<br> License Agreement : "+this.licenseAgreement;
    }
   
  
    

  
}

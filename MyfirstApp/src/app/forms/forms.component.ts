import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  loginForm= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),  
     //here we assigning formgroup and form nemes values
    address: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    password: new FormControl('')
    
    //here we are defining the key and pair values of control names
    //Validators.maxLength(15),Validators.minLength(5) is also used in address

  })

  get email(){return this.loginForm.get('email')}
  get address(){return this.loginForm.get('address')}


  constructor() { }

  ngOnInit(): void {
  }
  getFormData(val)
  {
  console.log(val)
  console.warn("form values",val)
  //Upar wala value agar dekhna hai to console kholna be
  //And loginform ka use karke likhna hai to write this in function ---->>> console.warn(this.loginform.vlaue); for o/p
  }
  preUserData={
        email: "amitshahre01@gmail.com",
        address : "Gondia",
        mobile: "9545755746"
      }
      getFormData2(){
    console.warn(this.loginForm.value)
      }

     


}

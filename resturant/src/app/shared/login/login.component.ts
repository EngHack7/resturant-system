import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Output()  closeLoginModal :  EventEmitter = new EventEmitter()

  // close(){
  //     this.closeLoginModal.emit()
  // }

  get email(){
   
    return  this.userLoginForm.get('email') 
  }
  get password(){
   
    return  this.userLoginForm.get('password') 
  }
  userLoginForm =this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  })
  constructor(private fb : FormBuilder) { }

  submitLogin (): void{
      console.log(this.userLoginForm.value)
      console.log(this.userLoginForm.valid)
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import {createInvalidEmailValidator} from './invalidEmailDomain';

 const hosts = ['gmail.com','yahoo.com'];
 const invalidEmailDomain= createInvalidEmailValidator(hosts);
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

        contactForm = new FormGroup({
          senderName : new FormControl('',Validators.required),
          senderEmail : new FormControl('',[Validators.required, Validators.email,invalidEmailDomain]),
          senderMessage : new FormControl('',[Validators.required,Validators.minLength(10)]),
    });


    submitForm(){
     
      console.log(this.contactForm.valid);
    }
}

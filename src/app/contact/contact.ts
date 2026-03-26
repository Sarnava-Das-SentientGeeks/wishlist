import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

        contactForm = new FormGroup({
          senderName : new FormControl('Enter your name',Validators.required),
          senderEmail : new FormControl('Enter your email',[Validators.required, Validators.email]),
          senderMessage : new FormControl('Enter your message',[Validators.required,Validators.minLength(10)]),
    });


    submitForm(){
     
      console.log(this.contactForm.valid);
    }
}

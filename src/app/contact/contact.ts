import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
    // contactForm = new FormGroup({
      senderNameControl = new FormControl('Enter your name');
      senderEmailControl = new FormControl('Enter your email');
      senderMessageControl = new FormControl('Enter your message');
    // })
}

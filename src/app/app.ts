import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Wish } from './wish/wish';




@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule,Wish],

})



export class App{

  
}

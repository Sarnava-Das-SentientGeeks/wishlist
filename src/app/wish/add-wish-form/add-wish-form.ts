import { Component,output,input } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css',
})
export class AddWishForm {
  addWish = output<WishItem>();
  items = input<WishItem[]>();

  newWishName='';

  addNewWish(){

    if(this.items()?.length)
      this.addWish.emit(new WishItem(this.items()![this.items()!.length-1].id+1,this.newWishName,false));
    else
      this.addWish.emit(new WishItem(0,this.newWishName,false));
    this.newWishName = '';

  }
}

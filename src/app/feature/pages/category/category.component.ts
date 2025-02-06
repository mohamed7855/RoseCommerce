import { Component } from '@angular/core';
import { CategSideBarComponent } from "../../components/categ-side-bar/categ-side-bar.component";

@Component({
  selector: 'app-category',
  imports: [CategSideBarComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  
  isOpened:boolean=false;


  toggleSide(){
    if(this.isOpened == true){
      this.isOpened = false;
    }else {
      this.isOpened = true
    }
  }
  closeSlide(){
    this.isOpened=false;
    console.log(this.isOpened);
    
  }

}

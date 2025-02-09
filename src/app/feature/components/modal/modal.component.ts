import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, Output, PLATFORM_ID, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnChanges {
  private readonly renderer2 = inject(Renderer2)
  private readonly pLATFORM_ID = inject(PLATFORM_ID)

  @Input() isOpen: boolean = false;
  @Output() modalClose: EventEmitter<void> = new EventEmitter<void>();


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      if (this.isOpen) {
        if(isPlatformBrowser(this.pLATFORM_ID)){
        this.renderer2.addClass(document.body, 'overflow-hidden');
        }
      } else {
        if(isPlatformBrowser(this.pLATFORM_ID)){
        this.renderer2.removeClass(document.body, 'overflow-hidden');
        }
      }
    }
  }

  closeModal(): void {
    this.isOpen = false;
    this.modalClose.emit();
  }


  // lw had hy reuse el component da mhtag t3ml 2 functions fel comp wahed open w wahd close w dol byghyro el stat bta3 boolean variable 
  // example:

  // isClicked:boolean = false;
  // openModal():void{
  //   this.isClicked = true;
  // }
  // closeModal():void{
  //   this.isClicked = false;
  // }
}

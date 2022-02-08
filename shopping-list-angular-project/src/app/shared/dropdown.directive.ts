import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  // ovde pozivamo HostBinding, tj na pozvanom elementu cemo dodati klasu sa imenom "open"
  // hostBinding ne mora da bude boolean, moze da bude string neki ako npr dodajemo neki style property, pa da se doda npr na mouseenter ili tako nesto
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  // postavljamo listener na click, koji ce pozvati HostBinding i setovace ga na suprotno od onog sto jeste
}

// UKOLIKO ZELIMO DA KADA KLIKNEMO NA JEDAN DROPDOWN A DA SE SVI OSTALI ZATVORE, MORAMO DA POSTAVIMO LISTENER NA CEO DOKUMENT NE NA ELEMENT

// import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
//   constructor(private elRef: ElementRef) {}
// }

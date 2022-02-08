import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  // CUSTOM STRUCTURAL DIRECTIVE
  @Input() set appUnless(condition: boolean) {
    // MORA BITI ISTO IME KAO SELECTOR !!
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      //KAO STO MU I IME KAZE, PRAVI VIEW U VIEW CONTAINER A VIEW JE OVDE TEMPLATE REF
    } else {
      this.vcRef.clear();
      // UKOLIKO UDJE OVDE, ZOVEMO CLEAR DA OCISTIMO SVE SA DOM-A
    }
  }
  // BITNO JE DA SE RAZUME, OVDE HOCEMO DA KADA SE POZOVE OVAJ CUSTOM PROPERTY DA POZOVEMO NEKU METODU, ZATO SMO DODALI SET
  // OVO JE I DALJE PROPERTY, SAMO JE DODAT SETTER KOJI JE METODA I BICE POZVAN SVAKI PUT KADA SE PROPERTY MENJA

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    // VAZNO, DA BI DOBILI PRISTUP <ng-template> </ng-template> GDE BI unless property MOGAO BITI POZVAN I IZVRSEN, MORAMO DA UBACIMO OVE DVE STVARI
    // TEMPLATE JE TEMPLATEREF A VCREF JE VIEW CONTAINER, TEMPLATE JE ŠTA A VCREF GDE CE BITI RENDEROVANO
  }
}
// NAPOMENA, MORA BITI DODATA U APP.MODULE UKOLIKO NIJE AUTOMATSKI

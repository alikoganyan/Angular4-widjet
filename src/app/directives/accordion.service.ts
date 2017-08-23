import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAccordion]'
})

export class AccordionServiceDirective {
  @HostBinding('class.avisits-active') isActive = false;

  @HostListener('click')
  toggleOpen() {
    this.isActive = !this.isActive;
  }
}

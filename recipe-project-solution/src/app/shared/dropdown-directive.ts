import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') mouseClick() {
    this.isOpen = !this.isOpen;
  }

}
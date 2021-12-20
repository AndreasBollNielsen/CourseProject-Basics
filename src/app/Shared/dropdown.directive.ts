import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
<<<<<<< HEAD
 @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}
=======
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
>>>>>>> 18cb73710d17ad47f80848ff8df2d5b7fbab3c19
}

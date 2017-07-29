import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: `navbar.component.html`,
  styleUrls: ["navbar.component.css"]
})
export class NavbarComponent  { 
    show:boolean = false;
    onClick(): void
    {
        this.show = !this.show;
        console.log(this.show);
    }
 }

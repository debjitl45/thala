import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css'],
})
export class ClickMeComponent {
  clickMessage: string = '';
  result: string = '';
  isThala: boolean = false;
inputValue: any;

  checkThala() {
    this.isThala = this.clickMessage.length === 7 || this.clickMessage === '7';
    if(this.isThala) this.result="Thala for a reason";
    else this.result="Sorry!";
  }

}

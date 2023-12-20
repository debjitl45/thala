import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  videoSource: string = './../assets/thala.mp4';
  isVediya: boolean = false;

  checkThala() {
    this.isThala = this.clickMessage.length === 7 || this.clickMessage === '7';
    if(this.isThala) 
    {
      this.result="Thala for a reason😎";
      this.isVediya=false;
    }
    else if(this.clickMessage.length>0 && !this.isThala) 
    {
      this.result="Try Again👀!";
      this.isVediya=true;
    }
  }

}

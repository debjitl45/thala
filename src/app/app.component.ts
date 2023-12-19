import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickMeComponent } from 'src/click-me/click-me.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){ }

  title = 'thala';

  @ViewChild(ClickMeComponent)
  child: ClickMeComponent = new ClickMeComponent;
}

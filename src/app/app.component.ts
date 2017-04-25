import {Component} from '@angular/core';
import {clickedStateTrigger, showStateTrigger} from "./animations";
import {Project} from "app/project.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    clickedStateTrigger,
    showStateTrigger
  ]
})
export class AppComponent {

  private projects: Project[] = [
    { name: 'Learn Angular Styles', description: 'Practice hard to understand how you may style components and update styles dynamically', status: 'active'},
    { name: 'Learn Angular Animations', description: 'Learn how Angular helps with animating elements on your page', status: 'active'},
    { name: 'Understanding Angular Basics', description: 'Understand what Angular is, how it works and how and when you might use it', status: 'inactive'},
    { name: 'Learn JavaScript, HTML and CSS', description: 'Absolutely required to dive deep into Angular and all its features', status: 'critical'},
  ];
  divClicked = false;
  doAnimate = false;
  ifover = false;
  clickInfo = 'default';
  // view = false;


  title: string = 'hay';
  body: string = 'world';

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }
/*  isShown(){
    if(!this.view){
      this.view = true;
    }else this.view = false;

  }*/


}

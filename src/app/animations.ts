import {animate, state, style, transition, trigger} from "@angular/animations";

export const clickedStateTrigger = trigger('clickedState', [
  state('default', style({
    backgroundColor: 'tomato',
    width: '200px',
    height: '200px'
  })),
  state(
    'clicked', style({
      backgroundColor: 'blue',
      width: '400px',
      hight: '50px'
    })),
  transition('default => clicked', animate('1s 500ms ease-in')),
  transition('clicked => default', animate(300))


]);

export const showStateTrigger = trigger('showState', [

  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000)
  ]),
  transition(':leave',
    animate(1000,
      style({
        opacity: 0
      }))),
]);

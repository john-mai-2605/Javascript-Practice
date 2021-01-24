import { el } from 'redom';
import { dispatch } from './dispatch';
import { Counter } from './counter';

export class App {
  constructor () {
    this.el = el('.app',
      this.counter = new Counter(),
    );
    setInterval(this.counter.count, 1000)
  }
}

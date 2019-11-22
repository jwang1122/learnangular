import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})

export class AppComponent {
  name = 'John';
  username = '';
  flag = false;
  log = [];

  onCleanUsername() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username.length == 0;
  }

  toggleFlag() {
    this.flag = !this.flag;
    this.log.push(this.log.length + 1);
  }
}

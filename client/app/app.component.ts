import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String = 'User Stories';
  userStories = [];

  constructor(http: Http) {
    http.get('/api/usernotification/user1')
    .map((response: Response) => response.json())
    .subscribe(
        res => {
          this.userStories = res.data;

          let notificationSocket = io('/notification');
          notificationSocket.on('new notification', function (notification) {
            this.userStories.splice(0, 0, notification);
          });
        },
        err => console.log(err),
        () => console.log('response Complete')
      );
  }

}

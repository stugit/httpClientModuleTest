import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$: Observable<Array<User>>;
  title = 'app';
  constructor(private _svc: DataService) {}

  getData() : void {
    this.data$ = this._svc.getData();
  }
}

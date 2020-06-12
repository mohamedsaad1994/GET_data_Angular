import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,OnDestroy {
  title = 'data-app';

  public JsonData=[];
  subscriber:any;

  constructor(private _dataService : DataServiceService) { }

  ngOnInit() {
    this.subscriber=this._dataService.getData()
    .subscribe(d=> this.JsonData=d);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

}

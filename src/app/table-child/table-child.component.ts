import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.css']
})
export class TableChildComponent implements OnInit,OnDestroy {

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

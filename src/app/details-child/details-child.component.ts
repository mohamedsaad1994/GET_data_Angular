import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-child',
  templateUrl: './details-child.component.html',
  styleUrls: ['./details-child.component.css']
})
export class DetailsChildComponent implements OnInit {
  title:string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.title=this.route.snapshot.params['title'];
  }

}

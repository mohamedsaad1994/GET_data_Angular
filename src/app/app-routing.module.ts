import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableChildComponent } from './table-child/table-child.component';
import { DetailsChildComponent } from './details-child/details-child.component';


const routes: Routes = [
  {path: 'data', component:TableChildComponent},
  {path: 'details/:title', component:DetailsChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

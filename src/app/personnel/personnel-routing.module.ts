import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PersonnelComponent} from './personnel/personnel.component';
import {PersonnelCreateComponent} from './personnel-create/personnel-create.component';
import {PersonnelListComponent} from './personnel-list/personnel-list.component';



const routes: Routes = [{
 path:"personnel", component: PersonnelComponent, children:[
   {
     path:"create", component:PersonnelCreateComponent
   },
   {
    path:"list", component:PersonnelListComponent
  }

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelRoutingModule { }

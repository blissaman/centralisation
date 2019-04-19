import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelRoutingModule } from './personnel-routing.module';
import {PersonnelComponent} from './personnel/personnel.component';
import { PersonnelCreateComponent } from './personnel-create/personnel-create.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';

@NgModule({
  declarations: [PersonnelCreateComponent, PersonnelListComponent, PersonnelComponent],
  imports: [
    CommonModule,
    PersonnelRoutingModule
  ]
})
export class PersonnelModule { }

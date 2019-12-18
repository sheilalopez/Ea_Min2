import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectDetailsPageRoutingModule } from './subject-details-routing.module';

import { SubjectDetailsPage } from './subject-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectDetailsPageRoutingModule
  ],
  declarations: [SubjectDetailsPage]
})
export class SubjectDetailsPageModule {}

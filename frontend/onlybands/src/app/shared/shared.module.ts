import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RouterModule } from '@angular/router'; // Only import RouterModule
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule, // Import RouterModule to use router directives
    HeaderComponent, // Import standalone HeaderComponent
    DrawerComponent

  ],
  exports: [
    HeaderComponent,
    RouterModule // Export RouterModule if needed in other modules
  ]
})
export class SharedModule { }
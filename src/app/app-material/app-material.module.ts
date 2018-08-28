import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ]
})
export class AppMaterialModule { }

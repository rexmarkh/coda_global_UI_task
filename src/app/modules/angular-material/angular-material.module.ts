import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,MatTabsModule, MatGridListModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }

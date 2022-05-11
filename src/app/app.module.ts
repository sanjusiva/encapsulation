import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoneComponent } from './none/none.component';
import { ShadowComponent } from './shadow/shadow.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneChildComponent } from './none-child/none-child.component';
import { ShadowChildComponent } from './shadow-child/shadow-child.component';
import { NormalComponent } from './normal/normal.component';

@NgModule({
  declarations: [
    AppComponent,
    NoneComponent,
    ShadowComponent,
    EmulatedComponent,
    NoneChildComponent,
    ShadowChildComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

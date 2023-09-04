import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game-control-component/game-control.component';
import { OddComponent } from './components/game-control-component/odd-component/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

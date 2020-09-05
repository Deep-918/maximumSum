import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { gamePlayComponent } from './game-play.component';
import { GameStatusComponent } from './game-status/game-status.component';

@NgModule({
  declarations: [
    gamePlayComponent,
    GameStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [gamePlayComponent]
})
export class AppModule { }

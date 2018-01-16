import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { OrganismHeader } from './patterns/organisms/header/organism.header';
import { AtomButton } from './patterns/atoms/button/atom.button';

@NgModule({
  declarations: [
    OrganismHeader,
    AtomButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [OrganismHeader]
})

export class AppModule { }

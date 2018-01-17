import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PageIndex } from './patterns/pages/pageIndex/page.index';
import { PagePage1 } from './patterns/pages/pagePage1/page.page1';
import { OrganismHeader } from './patterns/organisms/header/organism.header';
import { AtomButton } from './patterns/atoms/button/atom.button';

//import { AppRoutes } from './routes/appRoutes';

const appRoutes: Routes = [
  { path: 'index', component: PageIndex },
  { path: 'page1', component: PagePage1 }
];

@NgModule({
  declarations: [
    PageIndex,
    PagePage1,
    OrganismHeader,
    AtomButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [PageIndex]
})

export class AppModule { }

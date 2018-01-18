import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// import all patterns here
import { AppRouter } from './app.router';
import { PageIndex } from './patterns/pages/pageIndex/page.index';
import { PagePage1 } from './patterns/pages/pagePage1/page.page1';
import { OrganismHeader } from './patterns/organisms/header/organism.header';
import { AtomButton } from './patterns/atoms/button/atom.button';

// Define routes here
const appRoutes: Routes = [
  { path: 'index', component: PageIndex },
  { path: 'page1', component: PagePage1 },
  { path: '', redirectTo: 'index', pathMatch: 'full'}
];

// declare all patterns here. watch order!
@NgModule({
  declarations: [
    AppRouter,
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
  bootstrap: [AppRouter]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// const ROUTES = [
//   {
//     path: '',
//     component: HomeComponent
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   },
//   {
//     path: 'chat',
//     component: ChatComponent
//   },
//   {
//     path: 'form',
//     component: HeroFormComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(ROUTES),
    // NgbModule.forRoot()
  ],
  // providers: [MenuService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

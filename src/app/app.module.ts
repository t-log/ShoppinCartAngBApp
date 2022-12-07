import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const myRoute:Routes=[{path:"",component:AdminPageComponent},
                      {path:"user",component:UserPageComponent},
                      {path:"register",component:UserRegisterComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UserPageComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

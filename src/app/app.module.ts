import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { NavBarProductsComponent } from './nav-bar-products/nav-bar-products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';

const myRoute:Routes=[{path:"",component:AdminPageComponent},
                      {path:"user",component:UserPageComponent},
                      {path:"register",component:UserRegisterComponent},
                      {path:"products",component:ProductsPageComponent},
                      {path:"view",component:ViewAllProductComponent},
                      {path:"search",component:SearchProductComponent},
                      {path:"userprofile",component:ViewProfileComponent}]

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UserPageComponent,
    UserRegisterComponent,
    ProductsPageComponent,
    ViewAllProductComponent,
    NavBarProductsComponent,
    SearchProductComponent,
    ViewProfileComponent,
    NavBarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

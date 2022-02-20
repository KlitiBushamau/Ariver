import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarouselModule } from 'ngx-owl-carousel-o'
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HeroheaderComponent } from './homeshared/heroheader/heroheader.component';
import { FeaturedcategoryComponent } from './homeshared/featuredcategory/featuredcategory.component';
import { AwesomeComponent } from './homeshared/awesome/awesome.component';
import { SubscribesectionComponent } from './homeshared/subscribesection/subscribesection.component';
import { BestsellersComponent } from './homeshared/bestsellers/bestsellers.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsideComponent } from './productsshared/leftside/leftside.component';
import { ProductlistComponent } from './productsshared/productlist/productlist.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { UserdetailsComponent } from './auth/userdetails/userdetails.component';
import { AddressComponent } from './address/address.component';
import { NewarivalsComponent } from './newarivals/newarivals.component';
import { NewarrivalsComponent } from './homeshared/newarrivals/newarrivals.component';
import { ServicesComponent } from './homeshared/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    TrackingComponent,
    ContactComponent,
    CartComponent,
    CheckoutComponent,
    ProductdetailsComponent,
    HeroheaderComponent,
    FeaturedcategoryComponent,
    AwesomeComponent,
    SubscribesectionComponent,
    BestsellersComponent,
    FooterComponent,
    LeftsideComponent,
    ProductlistComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    OrdersComponent,
    UserdetailsComponent,
    AddressComponent,
    NewarivalsComponent,
    NewarrivalsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

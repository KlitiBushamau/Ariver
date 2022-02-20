import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrdersComponent } from "./orders/orders.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ForgotpasswordComponent } from "./auth/forgotpassword/forgotpassword.component";
import { UserdetailsComponent } from "./auth/userdetails/userdetails.component";
import { AddressComponent } from "./address/address.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'address', component: AddressComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

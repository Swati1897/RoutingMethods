import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContentComponent } from './Components/content/content.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HelpComponent } from './Components/help/help.component';
import { SettingComponent } from './Components/setting/setting.component';
import { FeatureComponent } from './Components/feature/feature.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { DisabledComponent } from './Components/disabled/disabled.component';
import { UserComponent } from './Components/user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './Components/products/product/product.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { ListComponentComponent } from './Components/products/list-component/list-component.component';
import { SubadminComponent } from './admin/subadmin/subadmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListComponent } from './admin/list/list.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ParentComponent,
    ChildComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent,
    SettingComponent,
    FeatureComponent,
    PricingComponent,
    DisabledComponent,
    UserComponent,
    AdminComponent,
    ProductComponent,
    AddProductComponent,
    ListComponentComponent,
    SubadminComponent,
    DashboardComponent,
    ListComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

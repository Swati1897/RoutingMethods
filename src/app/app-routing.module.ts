import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { AboutComponent } from './Components/about/about.component';


import { ContactComponent } from './Components/contact/contact.component';
import { DisabledComponent } from './Components/disabled/disabled.component';
import { FeatureComponent } from './Components/feature/feature.component';
import { HelpComponent } from './Components/help/help.component'; 
import { ContentComponent } from './Components/content/content.component';
import { HomeComponent } from './Components/home/home.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { SettingComponent } from './Components/setting/setting.component';
import { UserComponent } from './Components/user/user.component';

import { AdminComponent } from './admin/admin.component';
import { SubadminComponent } from './admin/subadmin/subadmin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListComponent } from './admin/list/list.component';
import { AddComponent } from './admin/add/add.component';
import { UpdateComponent } from './admin/update/update.component';

import { ProductsComponent } from './Components/products/products.component';
import { ProductComponent } from './Components/products/product/product.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';
import { ListComponentComponent } from './Components/products/list-component/list-component.component';


const routes: Routes = [
  
  {path:'', redirectTo:'home', pathMatch:'full'},
        {path:'parent', component:ParentComponent},
        {path:'child', component:ChildComponent},
        {path:'home', component:HomeComponent, children:[

              {path:'', redirectTo:'content', pathMatch:'full'},
                  {path:'content', component:ContentComponent},   // Query Params
                  {path:'feature', component:FeatureComponent},
                  {path:'pricing', component:PricingComponent},
                  {path:'disabled', component:DisabledComponent},
               // {path:'user', component:UserComponent}       //  Query Params
                  {path:'user/:usrNm/:surNm/:city/:country/:pincode', component:UserComponent} //path Params // enabled for mutiple user names(required)
                      //path Params
               ]},
        {path:'about', component:AboutComponent, children:[
               {path:'', redirectTo:'subadmin', pathMatch:'full'},  
              
                     {path:'subadmin', component:SubadminComponent},
                     {path:'dashboard', component:DashboardComponent},
        ]},
        {path:'contact', component:ContactComponent },
        {path:'help', component: HelpComponent},
        {path:'setting', component:SettingComponent},

        {path:'admin', component:AdminComponent, children:[
             {path:'', redirectTo:'subadmin', pathMatch:'full'},  
              
                  {path:'subadmin', component:SubadminComponent},
                  {path:'dashboard', component:DashboardComponent},
                  {path:'list', component:ListComponent},
                  {path:'add' , component:AddComponent},
                  {path:'update/:id' , component: UpdateComponent}  //path Params
        ] },
        
        {path:'products', component:ProductsComponent, children:[
             {path:'', redirectTo:'Allproduct', pathMatch:'full'},

                  {path:'Allproduct' , component: ProductComponent },
                  {path:'listcomponent', component: ListComponentComponent},
                  {path:'addproduct', component: AddProductComponent }
        ]},
     // {path:'pricing', component:PricingComponent},
     // {path:'disabled', component:DisabledComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

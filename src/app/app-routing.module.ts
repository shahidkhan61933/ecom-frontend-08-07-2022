import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbountUsComponent } from './components/abount-us/abount-us.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'about', component: AbountUsComponent },  
  { path:'products', loadChildren: ()=> import("./components/products/products.module").then(m=>m.ProductsModule)},
  { path:'data', loadChildren: ()=> import("./components/data/data.module").then(m=>m.DataModule)},
  { path:'auth', loadChildren: ()=> import("./components/auth/auth.module").then(m=>m.AuthModule)},
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

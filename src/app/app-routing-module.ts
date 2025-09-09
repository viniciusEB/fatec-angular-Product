import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompoment } from './home-compoment/home-compoment';
import { ProductComponent } from './product-component/product-component';
import { ClientComponent } from './client-component/client-component';

const routes: Routes = [
    {path: '',        component: HomeCompoment},
    {path: 'product', component: ProductComponent},
    {path: 'client',  component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

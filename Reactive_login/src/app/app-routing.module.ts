import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelPageComponent } from './wel-page/wel-page.component';
import { DetailComponent } from './wel-page/detail/detail.component';

const routes: Routes = [
  {path:'',redirectTo:"loginpage", pathMatch:"full"},
  {path:"loginpage", component:LoginpageComponent},
  {path:"welpage", component:WelPageComponent},
  {path:"welpage/detail/:id", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginpageComponent,WelPageComponent];
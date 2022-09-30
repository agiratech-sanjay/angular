import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelPageComponent } from './wel-page/wel-page.component';

const routes: Routes = [
  {path:'',redirectTo:"loginpage", pathMatch:"full"},
  {path:"loginpage", component:LoginpageComponent},
  {path:"welpage", component:WelPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginpageComponent,WelPageComponent];
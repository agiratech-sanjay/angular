import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepListComponent } from './dep-list/dep-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:"departments", pathMatch:"full"},
  {path:'departments',component:DepListComponent},
  {path:'employees',component:EmpListComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepListComponent,EmpListComponent,NotFoundComponent];

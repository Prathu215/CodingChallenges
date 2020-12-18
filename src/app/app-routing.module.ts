import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { EnrolleeListComponent } from './enrollee-list/enrollee-list.component';
import { ModifyEnrolleeComponent } from './modify-enrollee/modify-enrollee.component';

const routes: Routes = [
  { path: '', redirectTo: 'enrollees', pathMatch: 'full' },
  { path: 'enrollees', component: EnrolleeListComponent },
  { path: 'update/:id', component: ModifyEnrolleeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

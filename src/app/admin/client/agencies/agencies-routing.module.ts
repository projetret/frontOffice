import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAgenciesComponent } from './ListAgencies/ListAgencies.component';
import { AgenciesComponent} from './agencies.component';
const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent
  },
  {
    path: 'ListAgencies',
    component: ListAgenciesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }

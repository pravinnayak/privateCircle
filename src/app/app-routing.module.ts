import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListTableComponent } from './list-table/list-table.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListTableComponent,
  },
  {
    path: 'filters',
    component: AppComponent,
  },
  {
    path: 'searchHistory',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

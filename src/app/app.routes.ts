import { Routes } from '@angular/router';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
import { ListDeliveryViewComponent } from './components/list-delivery-view/list-delivery-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardViewComponent },
  { path: 'list-deliveries', component: ListDeliveryViewComponent},
];

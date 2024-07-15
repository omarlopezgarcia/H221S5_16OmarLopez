import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIpInfoComponent } from './ip-info/my-ip-info/my-ip-info.component';
import { AllIpInfoComponent } from './ip-info/all-ip-info/all-ip-info.component';

const routes: Routes = [
  { path: 'my-ip-info', component: MyIpInfoComponent },
  { path: 'all-ip-info', component: AllIpInfoComponent },
  { path: '', redirectTo: '/all-ip-info', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesModule } from './routes/routes.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), RoutesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

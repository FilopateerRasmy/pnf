import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'authantication', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'main', canActivate:[AuthGuard],loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'', redirectTo:'main', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

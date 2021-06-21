import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';

// localhost:3000/api/
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'videos', component:VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

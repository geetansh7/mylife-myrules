import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGameRuleComponent } from './my-game-rule/my-game-rule.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [{
	path: '',
	redirectTo: '/home',
	pathMatch: 'full'
},
{
	path: 'home',
	component: HomeComponent
},
{
	path: 'create-game-rule',
	component: MyGameRuleComponent
},
{
	path: '**',
	component: ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},

     {
       path: 'tester',
       loadChildren: () =>
            loadRemoteModule({
               type: 'module',
               remoteEntry: 'http://localhost:4201/remoteEntry.js',
               exposedModule: './Module'
           })
           .then(m => m.TesterModule)
  },
  {
    path: 'work',
    loadChildren: () =>
         loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:5000/remoteEntry.js',
            exposedModule: './Modules1'
        })
        .then(m => m.WorkModule)
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

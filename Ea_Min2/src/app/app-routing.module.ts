import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'subject-details/:subject',
    loadChildren: () => import('./pages/subject-details/subject-details.module').then( m => m.SubjectDetailsPageModule)
  },
  {
    path: 'student-info/:name',
    loadChildren: () => import('./pages/student-info/student-info.module').then( m => m.StudentInfoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

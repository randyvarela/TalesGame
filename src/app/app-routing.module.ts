import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tale',
    loadChildren: () => import('./tale/tale.module').then( m => m.TalePageModule)
  },
  {
    path: 'cuento1',
    loadChildren: () => import('./cuento1/cuento1.module').then( m => m.Cuento1PageModule)
  },
  {
    path: 'cuento2',
    loadChildren: () => import('./cuento2/cuento2.module').then( m => m.Cuento2PageModule)
  },
  {
    path: 'cuento3',
    loadChildren: () => import('./cuento3/cuento3.module').then( m => m.Cuento3PageModule)
  },
  {
    path: 'cuento4',
    loadChildren: () => import('./cuento4/cuento4.module').then( m => m.Cuento4PageModule)
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'cuento1.1',
    loadChildren: () => import('./cuento1/next/cuento1.1/cuento1.1.module').then( m => m.Cuento11PageModule)
  },
  {
    path: 'cuento1.2',
    loadChildren: () => import('./cuento1/next/cuento1.2/cuento1.2.module').then( m => m.Cuento12PageModule)
  },
  {
    path: 'cuento1.3',
    loadChildren: () => import('./cuento1/next/cuento1.3/cuento1.3.module').then( m => m.Cuento13PageModule)
  },
  {
    path: 'cuento2.2',
    loadChildren: () => import('./cuento2/next/cuento2.2/cuento2.2.module').then( m => m.Cuento22PageModule)
  },
  {
    path: 'cuento2.1',
    loadChildren: () => import('./cuento2/next/cuento2.1/cuento2.1.module').then( m => m.Cuento21PageModule)
  },
  {
    path: 'cuento2.3',
    loadChildren: () => import('./cuento2/next/cuento2.3/cuento2.3.module').then( m => m.Cuento23PageModule)
  },
  {
    path: 'cuento3.1',
    loadChildren: () => import('./cuento3/next/cuento3.1/cuento3.1.module').then( m => m.Cuento31PageModule)
  },
  {
    path: 'cuento3.2',
    loadChildren: () => import('./cuento3/next/cuento3.2/cuento3.2.module').then( m => m.Cuento32PageModule)
  },
  {
    path: 'cuento3.3',
    loadChildren: () => import('./cuento3/next/cuento3.3/cuento3.3.module').then( m => m.Cuento33PageModule)
  },
  {
    path: 'cuento3.1.1',
    loadChildren: () => import('./cuento3/next/cuento3.1/next/cuento3.1.1/cuento3.1.1.module').then( m => m.Cuento311PageModule)
  },
  {
    path: 'cuento3.1.2',
    loadChildren: () => import('./cuento3/next/cuento3.1/next/cuento3.1.2/cuento3.1.2.module').then( m => m.Cuento312PageModule)
  },
  {
    path: 'cuento3.1.3',
    loadChildren: () => import('./cuento3/next/cuento3.1/next/cuento3.1.3/cuento3.1.3.module').then( m => m.Cuento313PageModule)
  },
  {
    path: 'cuento3.2.1',
    loadChildren: () => import('./cuento3/next/cuento3.2/next/cuento3.2.1/cuento3.2.1.module').then( m => m.Cuento321PageModule)
  },
  {
    path: 'cuento3.2.2',
    loadChildren: () => import('./cuento3/next/cuento3.2/next/cuento3.2.2/cuento3.2.2.module').then( m => m.Cuento322PageModule)
  },
  {
    path: 'cuento3.2.3',
    loadChildren: () => import('./cuento3/next/cuento3.2/next/cuento3.2.3/cuento3.2.3.module').then( m => m.Cuento323PageModule)
  },
  {
    path: 'cuento3.3.1',
    loadChildren: () => import('./cuento3/next/cuento3.3/next/cuento3.3.1/cuento3.3.1.module').then( m => m.Cuento331PageModule)
  },
  {
    path: 'cuento3.3.2',
    loadChildren: () => import('./cuento3/next/cuento3.3/next/cuento3.3.2/cuento3.3.2.module').then( m => m.Cuento332PageModule)
  },
  {
    path: 'cuento3.3.3',
    loadChildren: () => import('./cuento3/next/cuento3.3/next/cuento3.3.3/cuento3.3.3.module').then( m => m.Cuento333PageModule)
  },
  {
    path: 'cuento4.1',
    loadChildren: () => import('./cuento4/next/cuento4.1/cuento4.1.module').then( m => m.Cuento41PageModule)
  },
  {
    path: 'cuento4.2',
    loadChildren: () => import('./cuento4/next/cuento4.2/cuento4.2.module').then( m => m.Cuento42PageModule)
  },
  {
    path: 'cuento4.3',
    loadChildren: () => import('./cuento4/next/cuento4.3/cuento4.3.module').then( m => m.Cuento43PageModule)
  },
  {
    path: 'cuento5',
    loadChildren: () => import('./cuento5/cuento5.module').then( m => m.Cuento5PageModule)
  },
  {
    path: 'cuento5.1',
    loadChildren: () => import('./cuento5/next/cuento5.1/cuento5.1.module').then( m => m.Cuento51PageModule)
  },
  {
    path: 'cuento5.2',
    loadChildren: () => import('./cuento5/next/cuento5.2/cuento5.2.module').then( m => m.Cuento52PageModule)
  },
  {
    path: 'cuento5.3',
    loadChildren: () => import('./cuento5/next/cuento5.3/cuento5.3.module').then( m => m.Cuento53PageModule)
  },
  {
    path: 'cuento6',
    loadChildren: () => import('./cuento6/cuento6.module').then( m => m.Cuento6PageModule)
  },
  {
    path: 'cuento6.1',
    loadChildren: () => import('./cuento6/next/cuento6.1/cuento6.1.module').then( m => m.Cuento61PageModule)
  },
  {
    path: 'cuento6.2',
    loadChildren: () => import('./cuento6/next/cuento6.2/cuento6.2.module').then( m => m.Cuento62PageModule)
  },
  {
    path: 'cuento6.3',
    loadChildren: () => import('./cuento6/next/cuento6.3/cuento6.3.module').then( m => m.Cuento63PageModule)
  },
  {
    path: 'cuento7',
    loadChildren: () => import('./cuento7/cuento7.module').then( m => m.Cuento7PageModule)
  },
  {
    path: 'cuento7.3',
    loadChildren: () => import('./cuento7/next/cuento7.3/cuento7.3.module').then( m => m.Cuento73PageModule)
  },
  {
    path: 'cuento7.2',
    loadChildren: () => import('./cuento7/next/cuento7.2/cuento7.2.module').then( m => m.Cuento72PageModule)
  },
  {
    path: 'cuento7.1',
    loadChildren: () => import('./cuento7/next/cuento7.1/cuento7.1.module').then( m => m.Cuento71PageModule)
  },
  {
    path: 'cuento8',
    loadChildren: () => import('./cuento8/cuento8.module').then( m => m.Cuento8PageModule)
  },
  {
    path: 'cuento8.1',
    loadChildren: () => import('./cuento8/next/cuento8.1/cuento8.1.module').then( m => m.Cuento81PageModule)
  },
  {
    path: 'cuento8.2',
    loadChildren: () => import('./cuento8/next/cuento8.2/cuento8.2.module').then( m => m.Cuento82PageModule)
  },
  {
    path: 'cuento8.3',
    loadChildren: () => import('./cuento8/next/cuento8.3/cuento8.3.module').then( m => m.Cuento83PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

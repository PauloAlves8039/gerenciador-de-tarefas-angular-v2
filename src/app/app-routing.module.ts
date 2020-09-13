/**
 * @file app-routing.module.ts
 * @author: Paulo Alves
 * @description: responsável pelas configurações das rotas da aplicação.
 * @version 1.0.1 (13/09/2020)
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: './tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

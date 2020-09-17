/**
 * @file tarefas-routing.module.ts
 * @author: Paulo Alves
 * @description: responsável pelas configurações das rotas referentes ao módulo de tarefas.
 * @version 1.0.1 (13/09/2020)
 */

import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { SobreComponent } from './sobre';
import { ContatoComponent } from './contato';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  },
  {
    path: 'tarefas/sobre',
    component: SobreComponent
  },
  {
    path: 'tarefas/contato',
    component: ContatoComponent
  }
];

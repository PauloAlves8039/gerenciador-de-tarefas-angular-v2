/**
 * @file tarefas.module.ts
 * @author: Paulo Alves
 * @description: responsável pelas atribuições do módulo de tarefas.
 * @version 1.0.1 (13/09/2020)
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }

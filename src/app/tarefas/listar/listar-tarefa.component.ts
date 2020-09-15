/**
 * @file listar-tarefa.component.ts
 * @author: Paulo Alves
 * @description: responsável pela listagem e opções de ações referentes a todas as tarefas.
 * @version 1.0.1 (13/09/2020)
 */

import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from './../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  /**
   * Função para listagem de todas as tarefas.
   */
  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  /**
   * Função para remover tarefa.
   *
   * @param $event recebe o evento referente a ação da tarefa.
   * @param tarefa instância do model Tarefa para remoção de registro.
   */
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  /**
   * Função para alteração de estado da tarefa.
   *
   * @param tarefa instância do model Tarefa para alteração de estado.
   */
  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}

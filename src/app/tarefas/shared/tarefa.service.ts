/**
 * @file tarefa.service.ts
 * @author: Paulo Alves
 * @description: responsável pela regra de negócio da aplicação.
 * @version 1.0.1 (12/09/2020)
 */

import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * Função para retornar uma lista de todas as tarefas.
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * Função para cadastrar uma nova tarefa.
   *
   * @param tarefa instância do model Tarefa para cadastro de novo registro.
   */
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Função responsável pela busca de tarefa por id.
   *
   * @param id propriedade de busca da tarefa.
   */
  buscaPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * Função responsável pela atualização de tarefa.
   *
   * @param tarefa instância do model Tarefa para atualização de registro.
   */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Função para remoção de tarefa por id.
   *
   * @param id propriedade para a remoção da tarefa.
   */
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Função para alterar o estado da tarefa.
   *
   * @param id propriedade para a alteração do estado da tarefa.
   */
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}

/**
 * @file cadastrar-tarefa.component.ts
 * @author: Paulo Alves
 * @description: responsável pelo cadastro de nova tarefa.
 * @version 1.0.1 (14/09/2020)
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from './../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css'],
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}

/**
 * @file tarefa-concluida.directive.ts
 * @author: Paulo Alves
 * @description: responsável por atribuir um faixa na tarefa quando a mesma for concluída.
 * @version 1.0.1 (16/09/2020)
 */

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }

}

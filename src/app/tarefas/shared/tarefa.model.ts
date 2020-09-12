/**
 * Classe responsável pelo modelo de entidade tarefa.
 *
 */

export class Tarefa {
  constructor(
    public id?: number,
    public nome?: string,
    public concluida?: boolean
  ) {}
}

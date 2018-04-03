import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    editando = null;
    nome = null;
    data = null;
    tipo = null;
    responsavel = null;
    matricula = null;
    excluir_ok = false;
    editar_ok = false;
    salvar_ok = false;
    exibir = false;
    disciplinas = [
        new Disciplina('david',16516516,null, 'davidxavier'),

    ];

    salvar() {
        if (this.editando) {
            this.editando.nome = this.nome;
            this.editando.matricula = this.matricula;
            this.editando.responsavel = this.responsavel;
            this.editando.data = this.data;
            this.tipo = this.tipo;
            this.editar_ok = true;

        } else {
            const d = new Disciplina(this.nome, this.matricula, this.data, this.responsavel);
            this.disciplinas.push(d);
            this.salvar_ok = true;
        }
        this.nome = null;
        this.matricula = null;
        this.data = null;
        this.responsavel = null;
        this.editando = null;
        this.tipo = null;
        this.exibir = false;
    }

    excluir(disciplina) {
        this.redefinir();
        if (this.editando == disciplina) {
            alert('Você não pode excluir uma disciplina que está editando');
        } else {
            if (confirm('Tem certeza que deseja excluir a disciplina "'
                    + disciplina.nome + '"?')) {
                const i = this.disciplinas.indexOf(disciplina);
                this.disciplinas.splice(i, 1);
                this.excluir_ok = true;
            }
        }
    }

    editar(disciplina) {
        this.redefinir();
        this.nome = disciplina.nome;
        this.matricula = disciplina.matricula;
        this.data = disciplina.data;
        this.responsavel = disciplina.responsavel
        this.editando = disciplina;
        this.tipo = disciplina;
    }

    cancelar() {
        this.redefinir();
    }

    redefinir() {
        this.nome = null;
        this.matricula = null;
        this.editando = null;
        this.data = null;
        this.tipo = null;
        this.responsavel = null;
        this.excluir_ok = false;
        this.salvar_ok = false;
        this.editar_ok = false;
    }
    oculta(local: any) {
        this.exibir = local === 'exibir' ? true : false;
    }
}
